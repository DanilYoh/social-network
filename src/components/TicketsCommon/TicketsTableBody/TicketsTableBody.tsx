import { Tbody } from '@chakra-ui/react';
import { FC } from 'react';

import { DropdownMenu } from '@components/DropdownMenu';
import { ITicket } from '@interfaces/tickets.interfaces';

import TicketsTableRow from '../TicketsTableRow/TicketsTableRow';

interface ITicketsTableBody {
  items: ITicket[];
  onEdit: (id: string) => void;
  onDelete: (id: number) => void;
}

const TicketsTableBody: FC<ITicketsTableBody> = ({
  items,
  onEdit,
  onDelete,
}) => (
  <Tbody>
    {items.map((item) => (
      <TicketsTableRow key={item.id} item={item}>
        <DropdownMenu
          onEditClick={() => onEdit(item.id.toString())}
          onDeleteClick={() => onDelete(item.id)}
        />
      </TicketsTableRow>
    ))}
  </Tbody>
);
export default TicketsTableBody;
