import { FC, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { actionsPopMessage } from '@/store/pop-message.slice';

const PopMessageManager: FC = () => {
  const dispatch = useAppDispatch();
  const setNull = () => dispatch(actionsPopMessage.setNull());

  const { meta } = useAppSelector((state) => state.popMessage);
  const toast = useToast();
  useEffect(() => {
    if (!meta) return;
    toast({
      title: meta.message,
      isClosable: true,
      status: meta.status,
      position: 'top',
    });
    setNull();
  }, [meta]);
  return null;
};

export default PopMessageManager;
