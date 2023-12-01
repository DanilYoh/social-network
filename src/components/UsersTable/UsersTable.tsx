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
import { FC, useEffect, useState } from 'react';

import { PassengerServices } from '@services/passenger.services';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { Pagination } from '@/common/Pagination';
import { DropdownMenuUsers } from '@components/DropdownMenuUsers';
import { ModalRemove } from '@components/ModalRemove';
import { UsersFetch } from '@/store/thunks/passengers.thunk';

interface IUsersTable {
  onEditClick: (id: number) => void;
}

const UsersTable: FC<IUsersTable> = ({ onEditClick }) => {
  const { users, totalPages } = useAppSelector((state) => state.users);
  const tableHead = [
    'ID',
    'Имя, Фамилия, Отчество',
    'Пол',
    'Телефон',
    'Дата рождения',
    'Серийный номер',
    'Гражданство',
    'Дата выхода паспорта',
    '',
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [passengerToDelete, setPassengerToDelete] = useState(0);
  const dispatch = useAppDispatch();

  const handlePageClick = (e: { selected: number }) => {
    dispatch(UsersFetch(e.selected)).catch((err) => err as Error);
  };

  const onDeletePassenger = (id: number) => {
    onOpen();
    setPassengerToDelete(id);
  };

  const deletePassenger = async () => {
    await PassengerServices.deletePassenger(passengerToDelete);
    await dispatch(UsersFetch());
  };

  useEffect(() => {
    setPassengerToDelete(0);
  }, [users]);

  const list = users.map((item) => (
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
        <p>
          {item.firstName} {item.lastName}
        </p>
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.passport.gender}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.phoneNumber}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.birthDate}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.passport.serialNumberPassport}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.passport.passportIssuingCountry}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.passport.passportIssuingDate}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        padding="0.25rem"
      >
        <DropdownMenuUsers
          onEditClick={() => onEditClick(item.id)}
          onDeleteClick={() => onDeletePassenger(item.id)}
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
    >
      <ModalRemove
        isOpen={isOpen}
        onClose={onClose}
        onDelete={deletePassenger}
        textBody="Вы действительно хотите удалить пассажира из списка?"
        itemOnDelete={passengerToDelete}
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
export default UsersTable;
