import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import createMockStore from 'redux-mock-store';

import { renderWithProviders } from '@/utils/test.utils';
import { RootState } from '@/store';

import DestinationsTable from './DestinationsTable';

const mockedDestinations = {
  destination: {
    destination: null,
    isOpenModal: false,
    destinations: {
      content: [
        {
          timezone: 'timezone0',
          countryName: 'countryName0',
          cityName: 'cityName0',
          airportName: 'airportName0',
          airportCode: 'airportCode0',
          id: 0,
        },
        {
          timezone: 'timezone1',
          countryName: 'countryName1',
          cityName: 'cityName1',
          airportName: 'airportName1',
          airportCode: 'airportCode1',
          id: 1,
        },
      ],
      totalPages: 1,
    },
    isLoading: false,
    error: '',
  },
};

const mockedStore = createMockStore<RootState>();

const store = mockedStore(mockedDestinations as RootState);

vi.mock('@/common/Pagination', () => ({
  Pagination: () => <div>Pagination Component</div>,
}));

vi.mock('@components/DropdownMenu', () => ({
  DropdownMenu: () => <div>DropdownMenu Component</div>,
}));

vi.mock('@/hooks', () => ({
  useAppSelector: () => mockedStore,
  useAppDispatch: () => () => true,
}));

describe('Test Admin Destinations Table', () => {
  test('table headers', () => {
    renderWithProviders(
      <BrowserRouter>
        <DestinationsTable />
      </BrowserRouter>
    );
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Страна/i)).toBeInTheDocument();
    expect(screen.getByText(/Город/i)).toBeInTheDocument();
    expect(screen.getByText(/Имя аэропорта/i)).toBeInTheDocument();
    expect(screen.getByText(/Код аэропорта/i)).toBeInTheDocument();
    expect(screen.getByText(/Часовой пояс/i)).toBeInTheDocument();
  });

  test('pagination', () => {
    renderWithProviders(
      <BrowserRouter>
        <DestinationsTable />
      </BrowserRouter>
    );
    expect(screen.getByText('Pagination Component')).toBeInTheDocument();
    expect(screen.getAllByText('Pagination Component')).toHaveLength(1);
  });

  test('table content', () => {
    renderWithProviders(
      <BrowserRouter>
        <DestinationsTable />
      </BrowserRouter>,
      {
        store,
      }
    );
    expect(screen.getAllByText(/timezone/i)).toBeDefined();
    expect(screen.getAllByText(/timezone/i)).toHaveLength(2);
    expect(screen.getAllByText(/countryName/i)).toBeDefined();
    expect(screen.getAllByText(/countryName/i)).toHaveLength(2);
    expect(screen.getAllByText(/cityName/i)).toBeDefined();
    expect(screen.getAllByText(/cityName/i)).toHaveLength(2);
    expect(screen.getAllByText(/airportName/i)).toBeDefined();
    expect(screen.getAllByText(/airportName/i)).toHaveLength(2);
    expect(screen.getAllByText(/airportCode/i)).toBeDefined();
    expect(screen.getAllByText(/airportCode/i)).toHaveLength(2);
  });
});
