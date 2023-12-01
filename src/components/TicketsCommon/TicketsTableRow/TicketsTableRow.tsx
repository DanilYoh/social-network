import { Td, Tr } from '@chakra-ui/react';
import { FC, PropsWithChildren } from 'react';

import { ITicket } from '@interfaces/tickets.interfaces';

interface ITicketsTableRow extends PropsWithChildren {
  item: ITicket;
}

const TicketsTableRow: FC<ITicketsTableRow> = ({ item, children }) => (
  <Tr data-testid="table-row">
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
    >
      {item.id}
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      w="21.875rem"
    >
      <p>{`${item.firstName} ${item.lastName}`}</p>
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      w="16.375rem"
    >
      {item.ticketNumber}
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      w="13.188rem"
    >
      {item.code}
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      w="14.661rem"
    >
      {item.arrivalDateTime}
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      w="9.77rem"
    >
      {item.departureDateTime}
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      w="9.77rem"
    >
      {item.flightId}
    </Td>
    <Td
      background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
      borderRight="0.0625rem solid #D9D9D9"
      padding="0.25rem"
    >
      {children}
    </Td>
  </Tr>
);
export default TicketsTableRow;
