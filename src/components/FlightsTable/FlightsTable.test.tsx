import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import { renderWithProviders } from '@utils/test.utils';

import FlightsTable from './FlightsTable';

const mockedStore = {
  flights: {
    flights: {
      content: [
        {
          id: 0,
          code: 'code0',
          airportFrom: 'VKO',
          airportTo: 'OMS',
          departureDateTime: 'Fri, 30 Jun 2023 09:42:14 GMT',
          arrivalDateTime: 'Sun, 30 Jul 2023 09:42:14 GMT',
          aircraftId: 1,
          flightStatus: 'status0',
        },
        {
          id: 1,
          code: 'code1',
          airportFrom: 'VKO',
          airportTo: 'OMS',
          departureDateTime: 'Fri, 30 Jun 2023 09:42:14 GMT',
          arrivalDateTime: 'Sun, 30 Jul 2023 09:42:14 GMT',
          aircraftId: 2,
          flightStatus: 'status1',
        },
      ],
      totalPages: 0,
    },
    aircraftId: {
      content: [
        {
          id: 1,
          aircraftNumber: 'aircraftNumber1',
          flightRange: 1,
          model: 'model1',
          modelYear: 1,
        },
        {
          id: 2,
          aircraftNumber: 'aircraftNumber2',
          flightRange: 2,
          model: 'model2',
          modelYear: 2,
        },
      ],
    },
    flight: null,
    isLoading: false,
    isClick: false,
    error: '',
  },
  destination: {
    destinations: {
      content: [
        {
          id: 1,
          airportCode: 'VKO',
          airportName: 'Внуково',
          cityName: 'Москва',
          timezone: 'GMT +3',
          countryName: 'Россия',
        },
        {
          id: 4,
          airportCode: 'OMS',
          airportName: 'Омск',
          cityName: 'Омск',
          timezone: 'GMT +6',
          countryName: 'Россия',
        },
      ],
      totalPages: 0,
    },
    isLoading: false,
    error: '',
    destination: null,
    isOpenModal: false,
  },
};

const mockOnEditClick = vi.fn();

vi.mock('@/common/Pagination', () => ({
  Pagination: () => <div>Pagination Component</div>,
}));

vi.mock('@components/DropdownMenu', () => ({
  DropdownMenu: () => <div>DropdownMenu Component</div>,
}));

describe('Test Admin Destinations Table', () => {
  test('table headers', () => {
    renderWithProviders(<FlightsTable onEditClick={mockOnEditClick} />);
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText(/Код \(Рейс\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Город откуда/i)).toBeInTheDocument();
    expect(screen.getByText(/Город куда/i)).toBeInTheDocument();
    expect(screen.getByText(/Дата отбытия/i)).toBeInTheDocument();
    expect(screen.getByText(/Дата прибытия/i)).toBeInTheDocument();
    expect(screen.getByText(/Модель самолета/i)).toBeInTheDocument();
    expect(screen.getByText(/Статус/i)).toBeInTheDocument();
  });

  test('pagination', () => {
    renderWithProviders(<FlightsTable onEditClick={mockOnEditClick} />);
    expect(screen.getByText('Pagination Component')).toBeInTheDocument();
    expect(screen.getAllByText('Pagination Component')).toHaveLength(1);
  });

  test('table content', () => {
    renderWithProviders(<FlightsTable onEditClick={mockOnEditClick} />, {
      preloadedState: mockedStore,
    });
    expect(screen.getAllByText(/code/i)).toBeDefined();
    expect(screen.getAllByText(/code/i)).toHaveLength(2);
    expect(screen.getAllByText(/Москва/i)).toBeDefined();
    expect(screen.getAllByText(/Москва/i)).toHaveLength(2);
    expect(screen.getAllByText(/Омск/i)).toBeDefined();
    expect(screen.getAllByText(/Омск/i)).toHaveLength(2);
    expect(screen.getAllByTestId('flight')).toBeDefined();
    expect(screen.getAllByTestId('flight')).toHaveLength(2);
    expect(screen.getAllByText(/model/i)).toBeDefined();
    expect(screen.getAllByText(/model/i)).toHaveLength(2);
    expect(screen.getAllByText(/status/i)).toBeDefined();
    expect(screen.getAllByText(/status/i)).toHaveLength(2);
  });
});
