import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { SelectDestination } from '@common/SearchForm';

const mockedCb = vi.fn();

describe('SelectDestination test', () => {
  it('Check elements', async () => {
    const user = userEvent.setup();
    render(
      <SelectDestination
        id="testID"
        value=""
        setValue={mockedCb}
        fieldHasError
        label="testLabel"
        options={[
          {
            id: 1,
            airportCode: 'VKO',
            airportName: 'Внуково',
            cityName: 'Москва',
            timezone: 'Россия',
            countryName: 'GMT +3',
          },
          {
            id: 2,
            airportCode: 'VOG',
            airportName: 'Гумрак',
            cityName: 'Волгоград',
            timezone: 'Россия',
            countryName: 'GMT +3',
          },
        ]}
      />
    );
    expect(screen.getByTestId('testID')).toBeInTheDocument();
    expect(screen.getByTestId('testID')).toHaveAttribute('id', 'testID');
    expect(screen.getByText('testLabel')).toBeInTheDocument();
    await user.click(screen.getByTestId('testID'));
    await act(async () => {
      expect(await screen.findByText('Москва')).toBeInTheDocument();
      expect(await screen.findByText('Волгоград')).toBeInTheDocument();
    });
  });
});
