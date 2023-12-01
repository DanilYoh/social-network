import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';

import { IModalRemoveProps } from '@/interfaces/modal-remove.interfaces';
import { Trash, Info } from '@/common/icons';

const ModalRemove: FC<IModalRemoveProps> = ({
  isOpen,
  onClose,
  textBody,
  onDelete,
  itemOnDelete,
}) => {
  const cancelRef = useRef(null);
  const handleClick = () => {
    onDelete(itemOnDelete).catch((): Error => {
      throw new Error();
    });
    onClose();
  };
  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay bg="rgba(0, 0, 0, 0.3)">
        <AlertDialogContent borderRadius="1rem" color="#000">
          <Info
            width="1.25rem"
            height="1.25rem"
            position="absolute"
            top="0.75rem"
            right="0.75rem"
          />
          <AlertDialogHeader mx="auto" fontSize="1rem" fontWeight="bold">
            Подтвердите действие
          </AlertDialogHeader>
          <AlertDialogBody
            color="#808080"
            textAlign="center"
            mx="auto"
            maxW="75%"
            pt="0"
            pb="1.8rem"
            fontSize="0.75rem"
          >
            {textBody}
          </AlertDialogBody>
          <AlertDialogFooter justifyContent="center">
            <ButtonGroup
              spacing="0"
              flexDirection="column"
              width="100%"
              gap="1.5"
            >
              <Button
                rightIcon={<Trash width="1.25rem" height="1.25rem" />}
                colorScheme="red"
                fontSize="0.875rem"
                onClick={handleClick}
              >
                Удалить
              </Button>
              <Button
                borderColor="#A3A3A3"
                fontSize="0.875rem"
                variant="outline"
                ref={cancelRef}
                onClick={onClose}
              >
                Отменить
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default ModalRemove;
