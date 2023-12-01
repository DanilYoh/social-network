/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/label-has-associated-control */

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';

import { IUsersData } from '@/interfaces/user-modal-date.interfaces';
import { CreateUserForm } from '@/components/CreateUserForm';

export type CreateOnSubmitHandler = (
  data: IUsersData,
  onSuccess?: () => unknown
) => unknown;

export interface IModalFormProps {
  onSubmit?: CreateOnSubmitHandler;
  error?: Error | null;
  loading?: boolean;
  text: string;
  modalName: string;
  modalHeader: string;
}

const ModalAdd: FC<IModalFormProps> = ({
  onSubmit,
  error,
  loading,
  text,
  modalName,
  modalHeader,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        data-testid="add"
        colorScheme="gray"
        variant="outline"
        background="#F9F9F9"
        onClick={onOpen}
      >
        {text}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          maxWidth="37.5rem"
          height="43.75rem"
          overflowY="scroll"
          overflowX="hidden"
        >
          <ModalHeader>{modalHeader}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pl="1.75rem" pr="1.75rem" pb="1.75rem">
            {modalName === 'user' && (
              <CreateUserForm
                onSubmit={onSubmit}
                error={error}
                loading={loading}
              />
            )}
            {modalName === 'destination' && <h1>destination</h1>}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalAdd;
