import { FC } from 'react';
import {
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { Pagination } from '@/common/Pagination';
import { DropdownMenuDestination } from '@components/DropdownMenuDestination';
import { fetchDestinationAdmin } from '@/store/thunks/destination-admin.thunk';

interface ITableProps {
  onEditClick?: (id: number) => void;
}

const DestinationsTable: FC<ITableProps> = ({ onEditClick }) => {
  const {
    destinations: { content, totalPages },
  } = useAppSelector((state) => state.destination);
  const dispatch = useAppDispatch();
  const tableHead = [
    'ID',
    'Страна',
    'Город',
    'Имя аэропорта',
    'Код аэропорта',
    'Часовой пояс',
    '',
  ];

  const handlePageClick = (e: { selected: number }): void => {
    dispatch(fetchDestinationAdmin(e.selected)).catch((err) => err as Error);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const onDeleteClick = (id: number): void => {};

  const list = content.map((item) => (
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
        w="21.875rem"
      >
        <p>{item.countryName}</p>
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="16.375rem"
      >
        {item.cityName}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="13.188rem"
      >
        {item.airportName}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="14.661rem"
      >
        {item.airportCode}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="9.77rem"
      >
        {item.timezone}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        padding="0.25rem"
      >
        <DropdownMenuDestination
          id={item.id}
          onDeleteClick={() => onDeleteClick(item.id)}
          onEditClick={onEditClick}
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
export default DestinationsTable;
