import React, { FC, useEffect } from 'react';
import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { IModalFormProps } from '@interfaces/modal-form-props.interfaces';
import { useAppDispatch, useAppSelector } from '@/hooks';
import {
  clickDestinationModal,
  setDestinationData,
} from '@store/destinations-admin.slice';

const ModalWindowDestination: FC<IModalFormProps> = (props) => {
  const dispatch = useAppDispatch();
  const { component: Component, buttonText, error, loading, onSubmit } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenModal } = useAppSelector((state) => state.destination);

  useEffect(() => {
    if (isOpenModal) {
      onOpen();
      dispatch(clickDestinationModal());
    }
  }, [isOpenModal, onOpen, dispatch]);

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

export default ModalWindowDestination;
