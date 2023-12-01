import { cleanup, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';
import { ClientSignInForm } from '@components/ClientSignInForm';

afterEach(() => {
  cleanup();
});

describe('ClientSignInForm tests', () => {
  it('renders the form elements', () => {
    renderWithProviders(
      <BrowserRouter>
        <ClientSignInForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Пароль')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Войти' })).toBeInTheDocument();
  });

  it('displays validation errors when submitting with empty inputs', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <ClientSignInForm />
      </BrowserRouter>
    );

    // Ожидаем, пока компонент `ClientSignInForm` не отрисуется на странице
    await waitFor(() => {
      expect(screen.getByLabelText('Email')).toBeInTheDocument();
      expect(screen.getByLabelText('Пароль')).toBeInTheDocument();
    });

    // Заблокирована кнопка "Войти", пока поля ввода пустые
    expect(screen.getByRole('button', { name: 'Войти' })).toBeDisabled();

    // Вводим пустые значения в поля ввода ({tab} это специальное решение, т.к. прописывание пустых строк иногда выдает ошибку библиотеки)
    await user.type(screen.getByLabelText('Email'), '' || '{tab}');
    await user.type(screen.getByLabelText('Пароль'), '' || '{tab}');

    await user.click(screen.getByRole('button', { name: 'Войти' }));

    // Ожидаем, пока появятся сообщения об ошибках
    await waitFor(() => {
      expect(screen.getByText('Введите email')).toBeVisible();
      expect(screen.getByText('Введите пароль')).toBeVisible();
    });
  });

  it('toggles the password visibility', async () => {
    const user = userEvent.setup();
    renderWithProviders(
      <BrowserRouter>
        <ClientSignInForm />
      </BrowserRouter>
    );

    expect(screen.getByLabelText('Пароль')).toHaveAttribute('type', 'password');
    await user.click(screen.getByTestId('password-toggle'));
    expect(screen.getByLabelText('Пароль')).toHaveAttribute('type', 'text');
    await user.click(screen.getByTestId('password-toggle'));
    expect(screen.getByLabelText('Пароль')).toHaveAttribute('type', 'password');
  });
});
