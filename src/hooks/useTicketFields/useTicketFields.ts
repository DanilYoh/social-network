import { useDispatch } from 'react-redux';

import { ticketFormFields } from '@utils/form-fields/ticket/ticket.form-fields';
import { formItemsHelper } from '@utils/form-items-helper.utils';
import {
  TTicketEditValues,
  TTicketInitValues,
} from '@interfaces/formik.interfaces';
import { TModalMeta } from '@interfaces/modal-meta.interfaces';
import { ticketCallback } from '@utils/form-fields/ticket/ticket.callback.form-fields';
import { useTicketInitialValues } from '@/hooks/useTicketInitialValues/useTicketInitialValues';
import { getCallbacks } from '@utils/get-callbacks.utils';

interface UseTicketFields {
  meta: TModalMeta;
}

export const useTicketFields = ({ meta }: UseTicketFields) => {
  // eslint-disable-next-line no-console
  console.log('useFields', meta);
  const items = ticketFormFields;
  const callbacks = getCallbacks<TTicketInitValues, TTicketEditValues>(
    ticketCallback(meta),
    useDispatch()
  );
  const initialValues = useTicketInitialValues(meta);
  const props = formItemsHelper<TTicketInitValues>({
    items,
    initialValues,
  });

  const res = { ...props, ...callbacks, items };

  return res;
};
