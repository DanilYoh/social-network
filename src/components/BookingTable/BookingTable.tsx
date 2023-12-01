import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { useAppSelector } from '@/hooks';
import Gear from '@icons/gear';
import { DropdownMenu } from '@components/DropdownMenu';

interface Props {
  onDeleteItem: (id: number) => void;
  onEditItem: (id: number) => void;
}

const BookingTable = ({ onDeleteItem, onEditItem }: Props) => {
  const { bookingsList } = useAppSelector((state) => state.booking);

  const tableHeader = [
    'ID',
    'Номер бронирования',
    'Дата бронирования',
    'Категория',
    'Идентификатор пассажира',
    'Идентификатор рейса',
  ];

  const items = bookingsList.map((item) => (
    <Tr key={item.id}>
      <Td>{item.id}</Td>
      <Td>{item.bookingNumber}</Td>
      <Td>{item.bookingData}</Td>
      <Td>{item.categoryType}</Td>
      <Td>{item.passengerId}</Td>
      <Td>{item.flightId}</Td>
      <Td>
        {
          // TODO make delete and edit actions
        }
        <DropdownMenu
          onDeleteClick={() => onDeleteItem(item.id)}
          onEditClick={() => onEditItem(item.id)}
        />
      </Td>
    </Tr>
  ));

  return (
    <TableContainer mt="1.75rem">
      {items.length ? (
        <Table variant="striped">
          <Thead backgroundColor="#F5F5F5">
            <Tr>
              {tableHeader.map((title, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <Th key={idx}>{title}</Th>
              ))}
              <Th>
                <Gear />
              </Th>
            </Tr>
          </Thead>
          <Tbody data-testid="booking-table">{items}</Tbody>
        </Table>
      ) : (
        <p>Не найдено ни одной брони</p>
      )}
    </TableContainer>
  );
};

export default BookingTable;
