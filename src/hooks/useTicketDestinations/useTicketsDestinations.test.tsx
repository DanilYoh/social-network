import { describe, test } from 'vitest';
import { screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { renderWithProviders } from '@/utils/test.utils';

import { useTicketDestinations } from './useTicketDestinations';

const responseStub = {
  isLoading: false,
  content: [
    { label: 'label1', value: 'value1' },
    { label: 'label2', value: 'value2' },
    {
      label: 'label3',
      value: 'value3',
    },
  ],
  totalPages: 1,
};

export const handlers = [
  rest.get('http://localhost:8080/api/destinations', (req, res, ctx) =>
    res(ctx.json(responseStub), ctx.delay(150))
  ),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

const Component = () => {
  const { options, isLoading } = useTicketDestinations();

  return (
    <div>
      <h1>Component</h1>
      {isLoading && <>is loading...</>}
      {!isLoading &&
        options.length !== 0 &&
        options?.map((item) => <p data-testid="value">{item.value}</p>)}
    </div>
  );
};

describe('useTicketDestinations', () => {
  test('get correct values', async () => {
    renderWithProviders(<Component />);
    await waitFor(() => {
      expect(screen.getByText('Component')).toBeInTheDocument();
      expect(screen.getAllByTestId('value')).toHaveLength(3);
    });
  });
});
