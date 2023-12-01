import { FC, useState } from 'react';
import {
  Alert,
  AlertIcon,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Pagination } from '@common/Pagination';
import {
  IAircraftData,
  IAircraftDataContent,
} from '@interfaces/aircraft-data.interfaces';
import { DropdownMenu } from '@components/DropdownMenu';
import { AircraftServices } from '@services/aircraft.services';
import { ModalRemove } from '@components/ModalRemove';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { AircraftsFetch } from '@/store/thunks/aircrafts.thunk';

interface ITableAircraftProps {
  update: () => Promise<void>;
  data: IAircraftData;
  error: Error | null;
  onEditClick: (id: number) => void;
}

const thData: string[] = [
  'ID',
  'Самолёт',
  'Номер самолёта',
  'Модель',
  'Год модели',
  'Длина полёта',
  '',
];

const TableAircraft: FC<ITableAircraftProps> = ({
  update,
  data,
  error,
  onEditClick,
}) => {
  const { aircrafts, totalPages } = useAppSelector((state) => state.aircrafts);
  const [itemOnDelete, setItemOnDelete] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useAppDispatch();

  const handlePage = (e: { selected: number }) => {
    dispatch(AircraftsFetch(e.selected)).catch((err) => err as Error);
  };

  const sliceText = (text: string) => {
    let finalText = text;
    const arrText = text.split(' ');
    if (arrText.length > 1) {
      finalText = arrText.slice(0, 1).toString();
    }
    return finalText;
  };

  const deleteAircraft = async (id: number) => {
    await AircraftServices.deleteAdminAircraft(id);
    await update();
  };

  const onDeleteAircraft = (id: number) => {
    onOpen();
    setItemOnDelete(id);
  };

  const navigate = useNavigate();

  return (
    <>
      <ModalRemove
        isOpen={isOpen}
        onClose={onClose}
        onDelete={deleteAircraft}
        textBody="Вы действительно хотите удалить самолёт из списка?"
        itemOnDelete={itemOnDelete}
      />
      <TableContainer>
        <Table border="0.0625rem solid grey">
          <Thead>
            <Tr>
              {thData.map((item) => (
                <Th
                  key={item} // Временное решение, пока на бэке не сделают все id уникальными
                  border="0.0625rem solid grey"
                  color="#000"
                >
                  {item}
                </Th>
              ))}
            </Tr>
          </Thead>

          <Tbody>
            {aircrafts.map((item: IAircraftDataContent) => (
              <Tr key={item.id}>
                <Td
                  p="0"
                  textAlign="center"
                  border="0.0625rem solid grey"
                  color="#393939"
                >
                  {item.id}
                </Td>
                <Td
                  padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
                  border="0.0625rem solid grey"
                  color="#393939"
                  onClick={() => {
                    navigate(
                      `/admin/aircraft-list/${item.id};${item.model.replace(
                        / /g,
                        ';'
                      )}`
                    );
                  }}
                >
                  {sliceText(item.model)}
                </Td>
                <Td
                  padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
                  border="0.0625rem solid grey"
                  color="#393939"
                >
                  {item.aircraftNumber}
                </Td>
                <Td
                  padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
                  border="0.0625rem solid grey"
                  color="#393939"
                >
                  {item.model}
                </Td>
                <Td
                  padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
                  border="0.0625rem solid grey"
                  color="#393939"
                >
                  {item.modelYear}
                </Td>
                <Td
                  padding="0.9375rem 0.625rem 0.9375rem 0.625rem"
                  border="0.0625rem solid grey"
                  color="#393939"
                >
                  {item.flightRange}
                </Td>
                <Td
                  padding="0.3125rem 0 0 0.9375rem"
                  textAlign="center"
                  border="0.0625rem solid grey"
                  color="#393939"
                >
                  <DropdownMenu
                    onDeleteClick={() => onDeleteAircraft(item.id)}
                    onEditClick={() => onEditClick(item.id)}
                    navigateParams={`${item.id};${item.model.replace(
                      / /g,
                      ';'
                    )}`}
                    navigateButtons={[
                      { name: 'Подробнее', path: '/admin/aircraft-list/' },
                    ]}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {error && (
        <Alert
          maxW="25rem"
          margin="3.125rem auto 3.125rem auto"
          justifyContent="center"
          status="error"
        >
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      {data && (
        <Pagination
          data-testid="navigation"
          handlePageClick={handlePage}
          pageCount={totalPages}
          initialPage={0}
        />
      )}
    </>
  );
};

export default TableAircraft;
