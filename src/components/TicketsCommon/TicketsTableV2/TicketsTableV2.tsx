import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { actionsModal } from '@/store/modal.slice';
import { TableWrapper } from '@components/TicketsCommon/TableWrapper';
import { removeTicket } from '@/store/thunks/tickets.thunk';
import { TicketsTableContainer } from '@components/TicketsCommon/TicketsTableContainer';
import { ModalRemove } from '@/components/ModalRemove';

const TicketsTableV2 = () => {
  const dispatch = useAppDispatch();
  const { tickets, status, error } = useAppSelector((state) => state.tickets);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ticketId, setTicketId] = useState(0);

  const onEditClick = (id: string) => {
    dispatch(
      actionsModal.setOpen({
        type: 'ticket',
        action: 'edit',
        title: 'Редактировать билета',
        id,
      })
    );
  };

  const deleteTicket = async (id: number) => {
    await dispatch(removeTicket(id)).catch((err) => err as Error);
  };

  const onDeleteClick = (itemId: number) => {
    onOpen();
    setTicketId(itemId);
  };

  return (
    <TableWrapper status={status} error={error}>
      <TicketsTableContainer
        items={tickets.content}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
      />
      <ModalRemove
        isOpen={isOpen}
        onClose={onClose}
        onDelete={deleteTicket}
        textBody="Вы действительно ходите удалить место назначения?"
        itemOnDelete={ticketId}
      />
    </TableWrapper>
  );
};
export default TicketsTableV2;
