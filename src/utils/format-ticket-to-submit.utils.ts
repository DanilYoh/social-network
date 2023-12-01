import { TTicketEditValues } from '@interfaces/formik.interfaces';
import { ITicket } from '@interfaces/tickets.interfaces';
import { formFormat } from '@utils/form-format.utils';

export const formatTicketToSubmit = (
  values: Record<TTicketEditValues, string | number>
): ITicket =>
  formFormat<TTicketEditValues, false>(
    values,
    ['arrivalDateTime', 'departureDateTime'],
    ['id', 'flightId', 'flightSeatId', 'passengerId'],
    false
  );
