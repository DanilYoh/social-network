import {
  TTicketEditValues,
  TTicketInitValues,
} from '@interfaces/formik.interfaces';
import { TModalMeta } from '@interfaces/modal-meta.interfaces';
import { useAppSelector } from '@hooks/index';
import { formatTicketToInitialValues } from '@utils/format-ticket-to-initial-values.utils';
import { allPropertiesToStringUtils } from '@utils/all-properties-to-string.utils';

export const useTicketInitialValues = (
  meta: TModalMeta
): Partial<Record<TTicketInitValues, string>> => {
  const { tickets } = useAppSelector((state) => state.tickets);
  switch (meta.action) {
    case 'create':
      return {};
    case 'edit': {
      const ticket = tickets.content.find(
        (e) => e.id.toString() === meta.id.toString()
      );
      if (!ticket) return {};
      const result = allPropertiesToStringUtils<TTicketEditValues>(ticket);
      return formatTicketToInitialValues(result);
    }
    default:
      throw new Error('No such type');
  }
};
