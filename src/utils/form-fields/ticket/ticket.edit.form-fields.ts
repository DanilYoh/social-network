import { TTicketEditValues } from '@interfaces/formik.interfaces';
import { IFormCallbackObject } from '@interfaces/form-callback-object.interfaces';
import { formatTicketToSubmit } from '@utils/format-ticket-to-submit.utils';
import { updateTicket } from '@/store/thunks/tickets.thunk';

export const ticketEditFormFields: IFormCallbackObject<TTicketEditValues> = {
  callback: null,
  async onSubmit(dispatch, values) {
    const formattedValues = formatTicketToSubmit(values);
    return dispatch(updateTicket(formattedValues));
  },
};
