import { IModalCreate, IModalEdit } from '@interfaces/modal-meta.interfaces';
import { ITicket } from '@interfaces/tickets.interfaces';

interface ICreateTicketFormMock {
  meta: IModalCreate<'ticket'>;
  type: 'create';
}

interface IEditTicketFormMock {
  type: 'edit';
  meta: IModalEdit<'ticket'>;
  ticket: ITicket;
}

export type TTicketFormMocks = IEditTicketFormMock | ICreateTicketFormMock;
