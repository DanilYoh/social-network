import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SecretQForm } from '@common/SignUp';
import { SignUpForm } from '@components/SignUpForm';

describe('Test security question form', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm Component={SecretQForm} />
      </BrowserRouter>
    );
  });
  it('Check label texts', () => {
    expect(screen.getAllByText(/Security Question/i)).toHaveLength(2);
    expect(screen.getByText(/Answer Security Question/i)).toBeInTheDocument();
  });

  it('Focus tests', async () => {
    const user = userEvent.setup();
    const password = screen.getByTestId('question');
    const confirmPassword = screen.getByTestId('questionAnswer');
    await user.tab();
    expect(password).toHaveFocus();
    await user.tab();
    expect(confirmPassword).toHaveFocus();
    await user.tab();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    const questionAnswer = screen.getByTestId('questionAnswer');
    await user.click(questionAnswer);
    await user.tab();
    expect(
      await screen.findByText(/please complete field/i)
    ).toBeInTheDocument();
    expect(await screen.findByText('Create Account')).toBeDisabled();
  });

  it('Wrong format test', async () => {
    const user = userEvent.setup();
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
  });

  it('Valid data', async () => {
    const user = userEvent.setup();
    const questionAnswer = screen.getByTestId('questionAnswer');
    await user.selectOptions(
      screen.getByTestId('question'),
      'Should we fire designer?'
    );
    await user.type(questionAnswer, 'Surely YES');
    await user.tab();
    expect(
      screen.queryByText('please enter letters and spaces only')
    ).toBeFalsy();
    await act(async () => {
      expect(await screen.findByText('Create Account')).toBeEnabled();
    });
  });
});
