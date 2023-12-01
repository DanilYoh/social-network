import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Table, TableContainer, Tbody } from '@chakra-ui/react';

import { renderWithProviders } from '@/utils/test.utils';

import TableFields from './TableFields';

describe('check table', () => {
  it('check table thead', () => {
    renderWithProviders(
      <BrowserRouter>
        <TableContainer>
          <Table>
            <Tbody>
              <TableFields
                aircraftId={0}
                category={{ categoryType: 'ECONOMY', id: 0 }}
                id={0}
                isLockedBack={false}
                isNearEmergencyExit
                seatNumber="12"
              />
            </Tbody>
          </Table>
        </TableContainer>
      </BrowserRouter>
    );
    expect(screen.getByText(/0/i)).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByText(/ECONOMY/i)).toBeInTheDocument();
    expect(screen.getByText(/нет/i)).toBeInTheDocument();
  });
});
