import { screen } from '@testing-library/react';
import { TabList, Tabs } from '@chakra-ui/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/test.utils';
import { flightCardData } from '@/mocks/FlightCard';

import FlightClass from './FlightClass';

const setTabVisibleMock = vi.fn().mockImplementation(() => undefined);
const setTabMock = vi.fn().mockImplementation(() => undefined);

describe('FlightClass tests', () => {
  test('Ticket elements render', () => {
    renderWithProviders(
      <Tabs>
        <TabList>
          {flightCardData[0].aircraft.seatSet.map((el) => (
            <FlightClass
              setTabVisible={setTabVisibleMock}
              key={el.id}
              id={el.id}
              price={el.price}
              category={el.category}
              tab={1}
              setTab={setTabMock}
            />
          ))}
        </TabList>
      </Tabs>
    );
    expect(screen.getAllByTestId('category')).toHaveLength(2);
    expect(screen.getByText('ECONOM')).toBeDefined();
    expect(screen.getByText('BUSINESS')).toBeDefined();
    expect(screen.getByText(/1375/i)).toBeDefined();
    expect(screen.getByText(/2730/i)).toBeDefined();
  });
  test('setTabVisible and setTab functions calling', async () => {
    renderWithProviders(
      <Tabs>
        <TabList>
          {flightCardData[0].aircraft.seatSet.map((el) => (
            <FlightClass
              setTabVisible={setTabVisibleMock}
              key={el.id}
              id={el.id}
              price={el.price}
              category={el.category}
              tab={1}
              setTab={setTabMock}
            />
          ))}
        </TabList>
      </Tabs>
    );
    await userEvent.click(screen.getAllByTestId('flightClassTab')[0]);
    expect(setTabVisibleMock).toHaveBeenCalled();
    expect(setTabMock).toHaveBeenCalled();
  });
});
