import { useAppDispatch } from '@/hooks';
import { actionsModal } from '@/store/modal.slice';
import { actionsPopMessage } from '@/store/pop-message.slice';
import { actionThen } from '@utils/action-then.uitls';

interface ModalManage<C extends () => Promise<any>> {
  cb: C;
  dispatch: ReturnType<typeof useAppDispatch>;
}

export const modalManage = async <C extends () => Promise<any>>({
  cb,
  dispatch,
}: ModalManage<C>) => {
  const setClose = () => dispatch(actionsModal.setClose());
  const setSuccess = (message: string) =>
    dispatch(actionsPopMessage.setSuccess(message));
  const setError = (message: string) =>
    dispatch(actionsPopMessage.setError(message));
  return cb().then(
    actionThen({
      res: (message) => {
        setClose();
        return setSuccess(message);
      },
      rej: (message) => setError(message),
    })
  );
};
