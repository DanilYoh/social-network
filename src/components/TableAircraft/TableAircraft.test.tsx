import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';

import TableAircraft from './TableAircraft';

const promise = new Promise<void>((resolve) => {
  resolve();
});
const onEditClick = vi.fn();

describe('check table', () => {
  it('check table thead', () => {
    renderWithProviders(
      <BrowserRouter>
        <TableAircraft
          onEditClick={onEditClick}
          update={() => promise}
          data={{ content: [] }}
          error={null}
        />
      </BrowserRouter>
    );
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText('Самолёт')).toBeInTheDocument();
    expect(screen.getByText(/Номер самолёта/i)).toBeInTheDocument();
    expect(screen.getByText(/Модель/i)).toBeInTheDocument();
    expect(screen.getByText(/Год модели/i)).toBeInTheDocument();
    expect(screen.getByText(/Длина полёта/i)).toBeInTheDocument();
  });
});
