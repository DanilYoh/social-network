import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import SignUpForm from './SignUpForm';

describe('Test SignUp form', () => {
  it('Check label texts', () => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/Country of Residence/)).toBeInTheDocument();
    expect(screen.getByText(/E-mail address/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Create password/i)).toBeInTheDocument();
    expect(screen.getByText(/Confirm password/i)).toBeInTheDocument();
    expect(screen.getByText('Security Question')).toBeInTheDocument();
    expect(screen.getByText(/Answer Security/i)).toBeInTheDocument();
    expect(screen.getByTestId('create')).toBeEnabled();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    await user.click(screen.getByTestId('create'));
    await act(async () => {
      expect(await screen.findByTestId('create')).toBeDisabled();
    });
    expect(await screen.findAllByText(/please complete field/i)).toHaveLength(
      10
    );
  });

  it('Correct data test', async () => {
    const user = userEvent.setup();
    const dom = renderWithProviders(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    const password = screen.getByTestId('password');
    const name = screen.getByTestId('firstName');
    const email = screen.getByTestId('email');
    const phone = screen.getByTestId('phone');
    const confirmPassword = screen.getByTestId('confirmPassword');
    const questionAnswer = screen.getByTestId('questionAnswer');
    const lastName = screen.getByTestId('lastName');
    await user.selectOptions(dom.getByTestId('day'), '21');
    await user.selectOptions(dom.getByTestId('month'), '4');
    await user.selectOptions(dom.getByTestId('year'), '1995');
    await user.type(email, 'asd@mail.ru');
    await user.type(phone, '9999999999');
    await user.selectOptions(dom.getByTestId('phoneCode'), '+1');
    await user.selectOptions(dom.getByTestId('country'), 'Japan');
    await user.type(name, 'Dima');
    await user.type(lastName, 'Ivanov');
    await user.type(password, 'CorrectPassword1$');
    await user.type(confirmPassword, 'CorrectPassword1$');
    await user.selectOptions(
      screen.getByTestId('question'),
      'Should we fire designer?'
    );
    await user.type(questionAnswer, 'Surely YES');
    await user.tab();
    await act(async () => {
      expect(await screen.findByTestId('create')).toBeEnabled();
    });
  }, 20000);

  it('Wrong format test', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>
    );
    const password = screen.getByTestId('password');
    const questionAnswer = screen.getByTestId('questionAnswer');
    await user.selectOptions(
      screen.getByTestId('question'),
      'Should we fire designer?'
    );
    await user.type(questionAnswer, 'my answer123');
    await user.tab();
    expect(
      await screen.findByText('please enter letters and spaces only')
    ).toBeInTheDocument();
    await user.type(password, 'wrongpass123');
    expect(await screen.findByText(/1 uppercase letter/i)).toBeInTheDocument();
    await act(async () => {
      expect(
        await screen.findByText('1 special character')
      ).toBeInTheDocument();
    });
  });
});
