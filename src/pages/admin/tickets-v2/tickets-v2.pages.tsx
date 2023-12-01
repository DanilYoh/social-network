import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { useAppDispatch } from '@/hooks';
import { actionsModal } from '@/store/modal.slice';
import { OpenModalButton } from '@common/Buttons/OpenModalButton';

import TicketsInfo from '../../../components/TicketsCommon/TicketsInfo/TicketsInfo';

const TicketsV2Page: FC = () => {
  const dispatch = useAppDispatch();
  const setOpen = () =>
    dispatch(
      actionsModal.setOpen({
        type: 'ticket',
        action: 'create',
        title: 'Добавить билет',
      })
    );

  return (
    <Flex
      bg="#FFFFFF"
      fontSize="0.875rem"
      flexDirection="column"
      margin="0"
      padding="3.125rem"
      boxSizing="border-box"
      gap="1.375rem"
    >
      <Flex flexDirection="row" justifyContent="space-between" w="100%">
        <Text fontSize="1.25rem" color="#818080">
          Билеты
        </Text>
        <OpenModalButton onClick={setOpen}>Добавить билеты +</OpenModalButton>
      </Flex>
      <TicketsInfo />
    </Flex>
  );
};

export default TicketsV2Page;
