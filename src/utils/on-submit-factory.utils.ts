import {
  FormikSubmit,
  FormikSubmitCB,
} from '@interfaces/form-callback-object.interfaces';
import { useAppDispatch } from '@/hooks';
import { modalManage } from '@utils/modal-manage.utils';

interface OnSubmitFactory<O extends FormikSubmitCB<string>> {
  dispatch: ReturnType<typeof useAppDispatch>;
  onSubmit: O;
}

export const onSubmitFactory =
  <O extends FormikSubmitCB<string>, CB extends FormikSubmit<string>>({
    dispatch,
    onSubmit,
  }: OnSubmitFactory<O>) =>
  async (...args: Parameters<CB>) =>
    modalManage({
      cb: () => onSubmit.call(null, dispatch, ...args),
      dispatch,
    });
