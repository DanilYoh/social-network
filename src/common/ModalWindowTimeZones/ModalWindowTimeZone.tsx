import { FC, useEffect } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { TCreateOnSubmitHandler } from '@/interfaces/modal-form-props.interfaces';
import { clickModalTimeZoneButton } from '@/store/timezones-admin.slice';

interface ModalWindowTimeZone {
  buttonText: string;
  component: React.ElementType;
  onSubmit: TCreateOnSubmitHandler;
  loading: boolean;
  error: Error | null;
}

const ModalWindowTimeZone: FC<ModalWindowTimeZone> = (props) => {
  const { component: Component, buttonText, loading, error, onSubmit } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();
  const { isClick } = useAppSelector((state) => state.timezones);

  useEffect(() => {
    if (isClick) {
      onOpen();
      dispatch(clickModalTimeZoneButton());
    }
  }, [dispatch, isClick, onOpen]);

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent borderRadius="0" width="37.5rem">
        <ModalHeader>{buttonText}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pl="1.75rem" pr="1.75rem" pb="1.75rem">
          <Component
            onSubmit={onSubmit}
            loading={loading}
            error={error}
            onClose={onClose}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalWindowTimeZone;
