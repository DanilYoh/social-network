import { FC } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalV2 {
  children: JSX.Element | string;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ModalV2: FC<ModalV2> = ({ children, isOpen, onClose, title }) => (
  <Modal onClose={onClose} isOpen={isOpen}>
    <ModalOverlay />
    <ModalContent borderRadius="0" width="37.5rem" data-testid="modal-content">
      <ModalHeader fontSize="1.25rem" color="#818080">
        {title}
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody pl="1.75rem" pr="1.75rem" pb="1.75rem">
        {children}
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default ModalV2;
