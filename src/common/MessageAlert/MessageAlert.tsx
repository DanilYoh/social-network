import React, { Dispatch, SetStateAction } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { IMessageAlert } from '@/interfaces/message-alert.interface';

const MessageAlert = React.memo(
  ({
    status,
    title,
    setState,
  }: IMessageAlert & { setState: Dispatch<SetStateAction<IMessageAlert>> }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    React.useEffect(() => {
      onOpen();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!isOpen) {
      return null;
    }
    return isOpen ? (
      <Alert
        status={status}
        alignItems="center"
        position="fixed"
        top="5rem"
        zIndex="1800"
        width="94vw"
      >
        <AlertIcon />
        <AlertTitle>{title}</AlertTitle>
        <CloseButton
          alignSelf="flex-start"
          position="absolute"
          right={5}
          top={2}
          onClick={() => {
            setState((prevState) => ({ ...prevState, status: undefined }));
            onClose();
          }}
        />
      </Alert>
    ) : null;
  }
);

export default MessageAlert;
