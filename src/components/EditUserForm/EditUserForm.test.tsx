import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';

import { renderWithProviders } from '@/utils/test.utils';

import CreateUserForm from './EditUserForm';

describe('test CreateUserForm', () => {
  test('should it be in document', () => {
    renderWithProviders(<CreateUserForm />);

    // const pass = screen.getByPlaceholderText('Пароль');
    // expect(pass).toBeInTheDocument();
  });
});
