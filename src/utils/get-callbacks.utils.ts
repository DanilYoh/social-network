import { IFormCallbackObject } from '@interfaces/form-callback-object.interfaces';
import { useAppDispatch } from '@/hooks';
import { onSubmitFactory } from '@utils/on-submit-factory.utils';

export const getCallbacks = <C extends string, E extends string>(
  args: IFormCallbackObject<C> | IFormCallbackObject<E>,
  dispatch: ReturnType<typeof useAppDispatch>
) => {
  const onSubmit = onSubmitFactory({
    dispatch,
    onSubmit: args.onSubmit,
  });
  return { callback: args.callback, onSubmit };
};
