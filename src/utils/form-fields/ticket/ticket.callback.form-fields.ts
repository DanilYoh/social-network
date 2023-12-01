import {
  TTicketEditValues,
  TTicketInitValues,
} from '@interfaces/formik.interfaces';
import { ticketCreateFormFields } from '@utils/form-fields/ticket/ticket.create.form-fields';
import { ticketEditFormFields } from '@utils/form-fields/ticket/ticket.edit.form-fields';
import { entityCallbackFactory } from '@utils/entity-callback-factory.utils';

export const ticketCallback = entityCallbackFactory<
  TTicketInitValues,
  TTicketEditValues
>({
  edit: ticketEditFormFields,
  create: ticketCreateFormFields,
});
