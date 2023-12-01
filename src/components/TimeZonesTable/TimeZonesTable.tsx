/* eslint-disable @typescript-eslint/no-empty-function */
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useState, FC } from 'react';

import { TimeZonesServices } from '@/services/time-zones.services';
import { TimeZonesFetch } from '@/store/thunks/timezones-admin.thunk';
import { Pagination } from '@/common/Pagination';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { DropdownMenu } from '@components/DropdownMenu';
import { ModalRemove } from '@components/ModalRemove';

interface ITimeZoneProps {
  onEditClick: (id: number) => void;
}

const TimeZonesTable: FC<ITimeZoneProps> = ({ onEditClick }) => {
  const { timezones, totalPages } = useAppSelector((state) => state.timezones);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [timeZoneToDelete, setTimeZoneToDelete] = useState(0);
  const dispatch = useAppDispatch();

  const onDeleteTimeZone = (id: number) => {
    onOpen();
    setTimeZoneToDelete(id);
  };

  const handlePageClick = (e: { selected: number }): void => {
    dispatch(TimeZonesFetch(e.selected)).catch((err) => err as Error);
  };

  const deleteTimeZone = async (id: number) => {
    await TimeZonesServices.deleteTimeZone(id);
    await dispatch(TimeZonesFetch());
  };

  const tableHead = [
    'ID',
    'Страна',
    'Город',
    'Среднее время по Гринвичу (GMT)',
    'Зимнее среднее время по Гринвичу (GMT)',
    '',
  ];

  const list = timezones
    .slice()
    .sort((a, b) => a.id - b.id)
    .map((item) => (
      <Tr key={item.id}>
        <Td
          background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
          borderRight="0.0625rem solid #D9D9D9"
        >
          {item.id}
        </Td>
        <Td
          background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
          borderRight="0.0625rem solid #D9D9D9"
        >
          {item.countryName}
        </Td>
        <Td
          background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
          borderRight="0.0625rem solid #D9D9D9"
        >
          {item.cityName}
        </Td>
        <Td
          background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
          borderRight="0.0625rem solid #D9D9D9"
        >
          {item.gmt}
        </Td>
        <Td
          background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
          borderRight="0.0625rem solid #D9D9D9"
        >
          {item.gmtWinter}
        </Td>
        <Td
          background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
          borderRight="0.0625rem solid #D9D9D9"
          padding="0.25rem"
        >
          <DropdownMenu
            onEditClick={() => onEditClick(item.id)}
            onDeleteClick={() => onDeleteTimeZone(item.id)}
          />
        </Td>
      </Tr>
    ));

  return (
    <Flex
      fontSize="0.875rem"
      display="flex"
      flexDirection="column"
      boxSizing="border-box"
      gap="1.375rem"
      minH="31.25rem"
    >
      <ModalRemove
        isOpen={isOpen}
        onClose={onClose}
        onDelete={deleteTimeZone}
        textBody="Вы действительно хотите удалить часовой пояс из списка?"
        itemOnDelete={timeZoneToDelete}
      />
      <TableContainer whiteSpace="inherit">
        <Table
          variant="unstyled"
          colorScheme="white"
          border="0.0688rem solid"
          borderColor="#D9D9D9"
        >
          <Thead>
            <Tr border="0.0688rem solid #D9D9D9">
              {tableHead.map((item) => (
                <Th
                  key={item}
                  color="black"
                  border="0.0625rem solid #D9D9D9"
                  textTransform="none"
                >
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>{list}</Tbody>
        </Table>
      </TableContainer>
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={totalPages}
        initialPage={0}
      />
    </Flex>
  );
};

export default TimeZonesTable;
