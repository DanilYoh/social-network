import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi } from 'vitest';

import { renderWithProviders } from '@/utils/test.utils';

import TimeZonesTable from './TimeZonesTable';

const onEditClick = vi.fn();
const mockedStore = {
  timezones: [
    {
      cityName: 'cityName0',
      countryName: 'countryName0',
      gmt: 'GMT+1',
      gmtWinter: 'GMT+0',
      id: 0,
    },
    {
      cityName: 'cityName1',
      countryName: 'countryName1',
      gmt: 'GMT+1',
      gmtWinter: 'GMT+0',
      id: 1,
    },
  ],
};

vi.mock('@/common/Pagination', () => ({
  Pagination: () => <div>Pagination Component</div>,
}));

vi.mock('@/hooks', () => ({
  useAppSelector: () => mockedStore,
  useAppDispatch: () => () => true,
}));

describe('Test Admin Time-zones Table', () => {
  it('table headers', () => {
    renderWithProviders(
      <BrowserRouter>
        <TimeZonesTable onEditClick={onEditClick} />
      </BrowserRouter>
    );
    expect(screen.getByText(/ID/i)).toBeInTheDocument();
    expect(screen.getByText('Страна')).toBeInTheDocument();
    expect(screen.getByText('Город')).toBeInTheDocument();
    expect(
      screen.getByText('Среднее время по Гринвичу (GMT)')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Зимнее среднее время по Гринвичу (GMT)')
    ).toBeInTheDocument();
  });
});
