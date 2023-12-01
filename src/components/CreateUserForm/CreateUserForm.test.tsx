import { render, screen } from '@testing-library/react';

import CreateUserForm from './CreateUserForm';

describe('render form components', () => {
  it('check inputs', () => {
    render(<CreateUserForm />);
    expect(screen.getByPlaceholderText('example@mail.ru')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Пароль')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
