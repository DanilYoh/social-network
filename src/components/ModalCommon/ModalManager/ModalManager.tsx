import { ModalV2 } from '@components/ModalCommon/ModalV2';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { actionsModal } from '@/store/modal.slice';
import { ModalElement } from '@components/ModalCommon/ModalElement';

const ModalManager = () => {
  const dispatch = useAppDispatch();
  const setClose = () => dispatch(actionsModal.setClose());
  const { isOpen, meta } = useAppSelector((state) => state.modal);
  const title = meta ? meta.title : 'Not Found';

  return (
    <ModalV2 title={title} onClose={setClose} isOpen={isOpen}>
      <ModalElement meta={meta} />
    </ModalV2>
  );
};

export default ModalManager;
