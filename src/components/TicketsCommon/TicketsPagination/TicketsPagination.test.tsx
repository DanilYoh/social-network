import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TicketsPagination } from '@components/TicketsCommon/TicketsPagination';
import { renderWithProviders } from '@utils/test.utils';
import { TTicketsResponse } from '@interfaces/tickets.interfaces';

const handlers = [
  rest.get<TTicketsResponse>(
    'http://localhost:8080/api/tickets',
    async (req, res, ctx) =>
      res(ctx.json({ totalPages: 10 } as TTicketsResponse), ctx.delay(150))
  ),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const setup = () => {
  const utils = renderWithProviders(<TicketsPagination />);
  const prevButton = utils.getByLabelText('Previous page');
  const nextButton = utils.getByLabelText('Next page');
  const getCurrentPage = () =>
    utils.getByLabelText(/Page \d+ is your current page/);
  return { ...utils, prevButton, nextButton, getCurrentPage };
};

describe('TicketsPagination', () => {
  it('works', async () => {
    const user = userEvent.setup();
    const { prevButton, nextButton, getAllByLabelText, getCurrentPage } =
      setup();
    await waitFor(() => expect(getAllByLabelText(/Page \d+/i)).toHaveLength(5));
    await user.click(nextButton);
    expect(getCurrentPage()).toHaveTextContent('2');
    await user.click(nextButton);
    expect(getCurrentPage()).toHaveTextContent('3');
    await user.click(prevButton);
    await user.click(prevButton);
    expect(getCurrentPage()).toHaveTextContent('1');
  });
});
