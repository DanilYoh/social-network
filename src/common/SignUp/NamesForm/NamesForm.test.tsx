import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { NamesForm } from '@common/SignUp';
import { SignUpForm } from '@components/SignUpForm';

describe('Test names form', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm Component={NamesForm} />
      </BrowserRouter>
    );
  });

  it('Check label texts', () => {
    expect(screen.getByText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByText(/Last Name/i)).toBeInTheDocument();
  });

  it('Focus tests', async () => {
    const user = userEvent.setup();
    const name = screen.getByTestId('firstName');
    const lastName = screen.getByTestId('lastName');
    await user.tab();
    expect(name).toHaveFocus();
    await user.tab();
    expect(lastName).toHaveFocus();
    await user.tab();
  });

  it('Empty values test', async () => {
    const user = userEvent.setup();
    const name = screen.getByTestId('firstName');
    await user.tab();
    await user.tab();
    expect(
      await screen.findByText(/please complete field/i)
    ).toBeInTheDocument();
    expect(await screen.findByText('Create Account')).toBeDisabled();
    await user.type(name, 'Dima');
    expect(
      await screen.findByText(/please complete field/i)
    ).toBeInTheDocument();
    expect(await screen.findByText('Create Account')).toBeDisabled();
  });

  it('Wrong format test', async () => {
    const user = userEvent.setup();
    const name = screen.getByTestId('firstName');
    const lastName = screen.getByTestId('lastName');
    await user.type(name, 'Dima123');
    await user.tab();
    expect(
      await screen.findByText('please enter letters and spaces only')
    ).toBeVisible();
    await user.type(name, 'Dima123');
    await user.type(lastName, 'Ivanov123');
    await user.tab();
    await act(async () => {
      expect(
        await screen.findAllByText('please enter letters and spaces only')
      ).toHaveLength(2);
    });
  });

  it('Valid data', async () => {
    const user = userEvent.setup();
    const name = screen.getByTestId('firstName');
    const lastName = screen.getByTestId('lastName');
    await user.type(name, 'Dima');
    await user.type(lastName, 'Ivanov');
    await user.tab();
    expect(
      screen.queryByText('please enter letters and spaces only')
    ).toBeFalsy();
    await act(async () => {
      expect(await screen.findByText('Create Account')).toBeEnabled();
    });
  });
});
