import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { renderWithProviders } from '@/utils/test.utils';
import { dates } from '@/mocks/ChooseDate';

import ChooseDate from './ChooseDate';

const previousDateMock = vi.fn().mockImplementation(() => undefined);
const nextDateMock = vi.fn().mockImplementation(() => undefined);
const chooseDateMock = vi.fn().mockImplementation(() => undefined);

describe('ChooseDate tests', () => {
  test('Check elements', () => {
    renderWithProviders(
      <ChooseDate
        dates={dates}
        previousDate={previousDateMock}
        nextDate={nextDateMock}
        chooseDate={chooseDateMock}
      />
    );
    expect(screen.getAllByText(/Jul 9 2023/i)).not.toHaveLength(0);
  });
  test('check previousDate function calling', async () => {
    renderWithProviders(
      <ChooseDate
        dates={dates}
        previousDate={previousDateMock}
        nextDate={nextDateMock}
        chooseDate={chooseDateMock}
      />
    );
    await userEvent.click(screen.getByTestId('previousDateButton'));
    expect(previousDateMock).toHaveBeenCalled();
  });
  test('check nextDate function calling', async () => {
    renderWithProviders(
      <ChooseDate
        dates={dates}
        previousDate={previousDateMock}
        nextDate={nextDateMock}
        chooseDate={chooseDateMock}
      />
    );
    await userEvent.click(screen.getByTestId('nextDateButton'));
    expect(nextDateMock).toHaveBeenCalled();
  });
  test('check chooseDate function calling', async () => {
    renderWithProviders(
      <ChooseDate
        dates={dates}
        previousDate={previousDateMock}
        nextDate={nextDateMock}
        chooseDate={chooseDateMock}
      />
    );
    await userEvent.click(screen.getAllByTestId('chooseDate')[0]);
    expect(chooseDateMock).toHaveBeenCalled();
  });
});
