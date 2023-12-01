import { fireEvent } from '@testing-library/react';
import { IoMdEye } from 'react-icons/io';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { SignInForm } from '@components/SignInForm';

import ShowPassword from './ShowPassword';

describe('ShowPassword button tests', () => {
  it('Check button', () => {
    const { getByTestId } = renderWithProviders(
      <BrowserRouter>
        <SignInForm>
          <ShowPassword />
        </SignInForm>
      </BrowserRouter>
    );
    const button = getByTestId('show');
    expect(button).toBeInTheDocument();
    fireEvent.change(button, {
      target: {
        icon: <IoMdEye size="1.4063rem" color="#BDBDBD" />,
      },
    });
  });
});
