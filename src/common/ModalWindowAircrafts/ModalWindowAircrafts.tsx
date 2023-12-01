import { FC, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { TCreateOnSubmitHandler } from '@/interfaces/modal-form-props.interfaces';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { clickModalAircraftsButton } from '@/store/aircrafts.slice';

interface ModalWindowAircrafts {
  buttonText: string;
  component: React.ElementType;
  onSubmit: TCreateOnSubmitHandler;
  error: Error | null;
  loading: boolean;
}

const ModalWindowAircrafts: FC<ModalWindowAircrafts> = (props) => {
  const { component: Component, buttonText, error, loading, onSubmit } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useAppDispatch();
  const { isClick } = useAppSelector((state) => state.aircrafts);

  useEffect(() => {
    if (isClick) {
      onOpen();
      dispatch(clickModalAircraftsButton());
    }
  }, [dispatch, isClick, onOpen]);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent borderRadius="0" width="37.5rem">
        <ModalHeader fontSize="1.25rem" color="#818080">
          {buttonText}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pl="1.75rem" pr="1.75rem" pb="1.75rem">
          <Component
            onSubmit={onSubmit}
            onClose={onClose}
            error={error}
            loading={loading}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindowAircrafts;
