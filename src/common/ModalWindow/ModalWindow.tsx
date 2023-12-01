import { FC } from 'react';
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

import { TCreateOnSubmitHandler } from '@/interfaces/modal-form-props.interfaces';

interface IModalFormProps {
  removeItemFromState?: () => void;
  buttonText: string;
  component: React.ElementType;
  onSubmit: TCreateOnSubmitHandler;
  error: Error | null;
  loading: boolean;
}

const ModalWindow: FC<IModalFormProps> = (props) => {
  const {
    component: Component,
    buttonText,
    error,
    loading,
    onSubmit,
    removeItemFromState,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalClick = () => {
    onOpen();
    removeItemFromState ? removeItemFromState() : null;
  };

  return (
    <>
      <Button
        data-testid="open"
        height="2.5rem"
        borderRadius="0.125rem"
        fontSize="0.875rem"
        color="#000"
        background="#F9F9F9"
        border="0.1rem solid #DEDEDE"
        boxShadow="0 0.6rem 0.4rem -0.5rem rgba(0, 0, 0, .2)"
        onClick={handleModalClick}
      >
        {buttonText}
      </Button>
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
    </>
  );
};

export default ModalWindow;
