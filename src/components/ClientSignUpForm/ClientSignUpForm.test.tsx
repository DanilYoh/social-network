import { screen, fireEvent } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';
import theme from '@/globalStyles';
import rootReducer from '@/store/user.slice';
import { NewSignUpPage } from '@/pages/new-sign-up';

describe('SignUp form', () => {
  it('renders all form elements', () => {
    renderWithProviders(<NewSignUpPage />);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Секретный вопрос')).toBeInTheDocument();
    expect(screen.getByText('Ответ на секретный вопрос')).toBeInTheDocument();
    expect(screen.getByText('Пароль')).toBeInTheDocument();
    expect(screen.getByText('Повторите пароль')).toBeInTheDocument();
    expect(
      screen.getByLabelText(
        'Я прочитал(-a) условия пользовательского соглашения и согласен(-на) с ними'
      )
    ).toBeInTheDocument();
    expect(screen.getByText('Зарегистрироваться')).toBeInTheDocument();
  });

  it('submits form data on valid input', () => {
    renderWithProviders(<NewSignUpPage />);

    const emailInput = screen.getByPlaceholderText('Введите свой email');
    const passwordInput = screen.getByPlaceholderText('Введите свой пароль');
    const confirmPasswordInput = screen.getByPlaceholderText(
      'Повторите свой пароль'
    );
    const secretQuestionInput = screen.getByLabelText('Секретный вопрос');
    const secretAnswerInput = screen.getByPlaceholderText('Введите свой ответ');
    const agreementCheckbox = screen.getByLabelText(
      'Я прочитал(-a) условия пользовательского соглашения и согласен(-на) с ними'
    );
    const submitButton = screen.getByText('Зарегистрироваться');

    fireEvent.change(emailInput, {
      target: { value: 'validemail@example.com' },
    });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: 'password123' },
    });
    fireEvent.change(secretQuestionInput, { target: { value: 'Question?' } });
    fireEvent.change(secretAnswerInput, { target: { value: 'Answer' } });
    fireEvent.click(agreementCheckbox);
    fireEvent.click(submitButton);

    // expect that valid form data was submitted
  });
});
