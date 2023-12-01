import React from 'react';

import { IMessageAlert } from '@/interfaces/message-alert.interface';
import { MessageAlert } from '@/common/MessageAlert';

export const useMessageAlert = () => {
  const [messageState, setMessageState] = React.useState<IMessageAlert>({
    title: '',
    status: undefined,
  });
  const messageApi = {
    success: (title: string): void => {
      setMessageState({
        title,
        status: 'success',
      });
    },
    error: (title: string): void => {
      setMessageState({
        title,
        status: 'error',
      });
    },
    warning: (title: string): void => {
      setMessageState({
        title,
        status: 'warning',
      });
    },
    info: (title: string): void => {
      setMessageState({
        title,
        status: 'info',
      });
    },
  };

  const MessageAlertContainer = messageState.status ? (
    <MessageAlert {...messageState} setState={setMessageState} />
  ) : null;

  return { messageApi, MessageAlertContainer };
};
