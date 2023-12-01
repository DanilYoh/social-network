import { ActionResponse } from '@/types/action-response.types';

type ActionCallback<T = unknown> = (message: string, arg: T) => void;
export const actionThen =
  <
    P = string,
    A = string,
    Res extends ActionCallback<P> = ActionCallback<P>,
    Rej extends ActionCallback = ActionCallback
  >({
    res,
    rej,
  }: {
    res?: Res;
    rej?: Rej;
  }) =>
  (e: ActionResponse<P, A>) => {
    if (!e) return;
    switch (e.meta.requestStatus) {
      case 'fulfilled': {
        return res && res(e.meta.message || 'Success', e.payload as P);
      }
      case 'rejected': {
        if (e.meta.aborted) return;
        return rej && rej(e.meta.message || 'Reject', e.payload);
      }
      default:
        throw new Error('The requestStatus is not recognised');
    }
  };
