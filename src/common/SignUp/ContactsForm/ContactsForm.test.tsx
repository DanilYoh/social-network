/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { SignUpForm } from '@components/SignUpForm';
import { renderWithProviders } from '@utils/test.utils';

import ContactsForm from './ContactsForm';

describe('Test contacts form', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm Component={ContactsForm} />
      </BrowserRouter>
    );
  });
  it('Check label texts', () => {
    expect(screen.getByText(/E-mail Address/i)).toBeInTheDocument();
    expect(screen.getByText(/Mobile Number/i)).toBeInTheDocument();
    expect(screen.getByText(/Country Code/i)).toBeInTheDocument();
  });

  it('Focus tests', async () => {
    const user = userEvent.setup();
    const email = screen.getByTestId('email');
    const phone = screen.getByTestId('phone');
    const phoneCode = screen.getByTestId('phoneCode');
    await user.tab();
    expect(email).toHaveFocus();
    await user.tab();
    expect(phoneCode).toHaveFocus();
    await user.tab();
    expect(phone).toHaveFocus();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    await user.tab();
    await user.tab();
    expect(
      await screen.findByText(/please complete field/i)
    ).toBeInTheDocument();
  });

  it('Wrong Email format test', async () => {
    const user = userEvent.setup();
    const email = screen.getByTestId('email');
    await user.type(email, 'wrong format');
    await user.tab();
    expect(
      await screen.findByText('your email address has to contain: @')
    ).toBeInTheDocument();
  });

  it('Select phone code test', async () => {
    const user = userEvent.setup();
    await user.selectOptions(screen.getByTestId('phoneCode'), '+1');
    await waitFor(() => {
      expect(
        (screen.getByText('+1') as HTMLOptionElement).selected
      ).toBeTruthy();
      expect(
        (screen.getByText('+7') as HTMLOptionElement).selected
      ).toBeFalsy();
    });
  });

  it('Phone test', async () => {
    const user = userEvent.setup();
    const phone = screen.getByTestId('phone');
    await user.type(phone, '9999999999');
    await user.tab();
    await waitFor(() => {
      expect((screen.getByTestId('phone') as HTMLInputElement).value).toEqual(
        '9999999999'
      );
    });
  });

  it('Valid contacts test', async () => {
    const user = userEvent.setup();
    const email = screen.getByTestId('email');
    const phone = screen.getByTestId('phone');
    await user.type(email, 'asd@mail.ru');
    await user.type(phone, '9999999999');
    await user.selectOptions(screen.getByTestId('phoneCode'), '+1');
    await user.tab();
    expect(
      screen.queryByText(/please enter your number as per format/i)
    ).toBeFalsy();
    expect(
      screen.queryByText(/your email address has to contain: @/i)
    ).toBeFalsy();
    await act(async () => {
      expect(await screen.findByText('Create Account')).toBeEnabled();
    });
  });
});
