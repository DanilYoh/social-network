import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import UsersTable from './UsersTable';

describe('Test Admin Users Table', () => {
  const onEditClick = () => {
    // Обработка нажатия на кнопку редактирования
  };

  it('table', () => {
    renderWithProviders(<UsersTable onEditClick={onEditClick} />);
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Имя/i)).toBeInTheDocument();
    expect(screen.getByText(/Пол/i)).toBeInTheDocument();
    expect(screen.getByText(/Телефон/i)).toBeInTheDocument();
    expect(screen.getByText(/Дата рождения/i)).toBeInTheDocument();
    expect(screen.getByText(/Серийный номер/i)).toBeInTheDocument();
    expect(screen.getByText(/Гражданство/i)).toBeInTheDocument();
    expect(screen.getByText(/Дата выхода паспорта/i)).toBeInTheDocument();
  });
});
