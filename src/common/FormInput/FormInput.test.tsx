import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SignInForm } from '@components/SignInForm';

import FormInput from './FormInput';

describe('FormInput', () => {
  it('check input, label, error messages', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <SignInForm>
          <FormInput label="test" id="test" type="text" />
        </SignInForm>
      </BrowserRouter>
    );
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    await user.type(input, '{enter}123');
    expect(input).toHaveValue('123');
  });
});
