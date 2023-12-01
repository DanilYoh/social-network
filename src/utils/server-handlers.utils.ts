import { rest } from 'msw';

import { destinationsMockData } from '@/mocks/mock-data.mocks';
import { ITicket } from '@interfaces/tickets.interfaces';

export const ticketHandlers = [
  rest.get('http://localhost:8080/api/destinations', (req, res, ctx) =>
    res(ctx.json(destinationsMockData), ctx.delay(150))
  ),
  rest.post('http://localhost:8080/api/tickets', async (req, res, ctx) => {
    const data = await req.json<ITicket>();
    return res(ctx.json({ ...data, id: null }), ctx.delay(150));
  }),
  rest.patch('http://localhost:8080/api/tickets/:id', async (req, res, ctx) => {
    const data = await req.json<ITicket>();
    return res(ctx.json(data), ctx.delay(150));
  }),
];
