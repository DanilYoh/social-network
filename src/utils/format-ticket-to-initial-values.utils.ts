import { formFormat } from '@utils/form-format.utils';
import {
  TTicketEditValues,
  TTicketInitValues,
} from '@interfaces/formik.interfaces';

export const formatTicketToInitialValues = (
  values: Record<TTicketInitValues | TTicketEditValues, PropertyKey>
) =>
  formFormat<TTicketInitValues, true>(
    values,
    ['arrivalDateTime', 'departureDateTime'],
    [],
    true
  );
