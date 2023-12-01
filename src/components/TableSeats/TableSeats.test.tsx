import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { renderWithProviders } from '@/utils/test.utils';

import TableSeats from './TableSeats';

describe('SeatsListPage', () => {
  it('renders ', () => {
    renderWithProviders(
      <BrowserRouter>
        <TableSeats />
      </BrowserRouter>
    );
    expect(screen.getByText(/id сиденья/i)).toBeInTheDocument();
    expect(screen.getByText(/номер сиденья/i)).toBeInTheDocument();
    expect(screen.getByText(/класс/i)).toBeInTheDocument();
    expect(screen.getByText(/Неподвижное сиденье/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Близко к экстренному выходу/i)
    ).toBeInTheDocument();
  });
});
