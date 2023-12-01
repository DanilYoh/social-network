import { Table, TableContainer } from '@chakra-ui/react';
import { FC } from 'react';

import { ITicket } from '@interfaces/tickets.interfaces';
import { TicketsTableHead } from '@components/TicketsCommon/TicketsTableHead';
import { TicketsTableBody } from '@components/TicketsCommon/TicketsTableBody';

interface ITicketsTableContainer {
  items: ITicket[];
  onEditClick: (id: string) => void;
  onDeleteClick: (id: number) => void;
}

const TicketsTableContainer: FC<ITicketsTableContainer> = ({
  items,
  onEditClick,
  onDeleteClick,
}) => (
  <TableContainer whiteSpace="inherit">
    <Table
      variant="unstyled"
      colorScheme="white"
      border="0.0688rem solid"
      borderColor="#D9D9D9"
    >
      <TicketsTableHead />
      <TicketsTableBody
        items={items}
        onEdit={onEditClick}
        onDelete={onDeleteClick}
      />
    </Table>
  </TableContainer>
);
export default TicketsTableContainer;
