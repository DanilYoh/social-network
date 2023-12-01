import { callIfChange } from '@utils/change-helper.utils';
import { TTicketInitValues } from '@interfaces/formik.interfaces';
import { IFormCallbackObject } from '@interfaces/form-callback-object.interfaces';
import { createTicket } from '@/store/thunks/tickets.thunk';

export const ticketCreateFormFields: IFormCallbackObject<TTicketInitValues> = {
  callback({ values, setFieldValue }) {
    const value = `${values.from}${values.to}`;
    callIfChange(values.code, `${values.from}${values.to}`, () =>
      setFieldValue('code', value)
    )?.catch((e) => e as Error);
  },
  async onSubmit(dispatch, obj) {
    return dispatch(createTicket(obj));
  },
};
