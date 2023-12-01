import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SignUpForm } from '@components/SignUpForm';

import AgeForm from './AgeForm';

describe('Test age form', () => {
  beforeEach(() => {
    renderWithProviders(
      <BrowserRouter>
        <SignUpForm Component={AgeForm} />
      </BrowserRouter>
    );
  });
  it('Check label texts', () => {
    expect(screen.getByText(/Date of Birth/i)).toBeInTheDocument();
    expect(screen.getByText(/day/i)).toBeInTheDocument();
    expect(screen.getByText(/month/i)).toBeInTheDocument();
    expect(screen.getByText(/Year/)).toBeInTheDocument();
    expect(screen.queryByText(/please complete field/i)).toBeNull();
  });

  it('Focus tests', async () => {
    const user = userEvent.setup();
    const day = screen.getByTestId('day');
    const month = screen.getByTestId('month');
    const year = screen.getByTestId('year');
    await user.tab();
    expect(day).toHaveFocus();
    await user.tab();
    expect(month).toHaveFocus();
    await user.tab();
    expect(year).toHaveFocus();
  });

  it('Min age required test', async () => {
    const user = userEvent.setup();
    await user.selectOptions(screen.getByTestId('day'), '21');
    await user.selectOptions(screen.getByTestId('month'), '4');
    await user.selectOptions(screen.getByTestId('year'), '2015');
    await user.tab();
    expect(await screen.findByTestId('min-age')).toHaveTextContent(
      'minimum 18 years of age is required'
    );
  });

  it('Correct age test', async () => {
    const user = userEvent.setup();
    await user.selectOptions(screen.getByTestId('day'), '21');
    await user.selectOptions(screen.getByTestId('month'), '4');
    await user.selectOptions(screen.getByTestId('year'), '1995');
    await user.tab();
    expect(screen.queryByText(/Minimum 18/i)).toBeFalsy();
    await act(async () => {
      expect(await screen.findByText('Create Account')).toBeEnabled();
    });
  });
});
