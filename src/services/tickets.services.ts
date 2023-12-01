import { adminInstance } from '@/instances/admin-instance';
import Endpoints from '@enums/endpoints';
import { ITicket, TTicketsResponse } from '@interfaces/tickets.interfaces';
import { IDataForm } from '@interfaces/modal-form-props.interfaces';

export const TicketsServices = {
  getTickets: (page = 0) =>
    adminInstance
      .get<TTicketsResponse>(Endpoints.API_TICKETS, { params: { page } })
      .then((response) => response)
      .catch(() => {
        throw new Error('Ошибка');
      }),

  postNewTicket: (data: IDataForm) =>
    adminInstance
      .post<ITicket>(Endpoints.API_TICKETS, data)
      .then((response) => response)
      .catch(() => {
        throw new Error('Ошибка');
      }),

  editTicket: (data: ITicket) =>
    adminInstance
      .patch<ITicket>(`${Endpoints.API_TICKETS}/${data.id}`, data)
      .then((response) => response)
      .catch(() => {
        throw new Error('Ошибка');
      }),

  deleteTicket: (id: number) =>
    adminInstance.delete<string>(`${Endpoints.API_TICKETS}/${id}`).catch(() => {
      throw new Error('Ошибка');
    }),
};
