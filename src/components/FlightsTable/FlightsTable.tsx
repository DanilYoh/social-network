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
import { FC, useCallback, useEffect, useState } from 'react';
import { format } from 'date-fns';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { Pagination } from '@/common/Pagination';
import { aircraftFetchSuccess } from '@/store/flights.slice';
import { AircraftServices } from '@services/aircraft.services';
import { FlightsAdminApi } from '@services/flights.services';
import { fetchFlightAdmin } from '@/store/thunks/flights-admin.thunk';
import { DropdownMenuFlights } from '@/components/DropdownMenuFlights';
import { ModalRemove } from '@/components/ModalRemove';
import { getCityFromAirport } from '@utils/get-city-from-airport.utils';

interface IFlightsTable {
  onEditClick: (id: number) => void;
}

const FlightsTable: FC<IFlightsTable> = ({ onEditClick }) => {
  const {
    flights: { content, totalPages },
    aircraftId,
  } = useAppSelector((state) => state.flights);
  const { destinations } = useAppSelector((state) => state.destination);
  const dispatch = useAppDispatch();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [flightToDelete, setFlightToDelete] = useState(0);

  const onDeleteFlight = (id: number) => {
    onOpen();
    setFlightToDelete(id);
  };

  const getFlight = useCallback(() => {
    dispatch(fetchFlightAdmin())
      .then((res) => res)
      .catch((err) => err as Error);
  }, [dispatch]);

  useEffect(() => {
    getFlight();
  }, [dispatch, getFlight]);

  const aircraft = useCallback(() => {
    AircraftServices.getClientAircraft()
      .then((res) => {
        dispatch(aircraftFetchSuccess(res));
      })
      .catch((err) => err as Error);
  }, [dispatch]);

  useEffect(() => {
    aircraft();
  }, [dispatch, aircraft]);

  const tableHead = [
    'ID',
    'Код (Рейс)',
    'Город откуда',
    'Город куда',
    'Дата отбытия',
    'Дата прибытия',
    'Модель самолета',
    'Статус',
    '',
  ];

  const handlePageClick = (e: { selected: number }): void => {
    dispatch(fetchFlightAdmin(e.selected)).catch((err) => err as Error);
  };

  const aircraftModel =
    aircraftId.content.length !== 0 ? aircraftId.content : null;

  const findIndx = (id: number) =>
    aircraftId.content.findIndex((el) => id === el.id);

  const onDeleteClick = async () => {
    await FlightsAdminApi.deleteAdminFlights(flightToDelete);
    getFlight();
  };

  const list = content.map((item) => (
    <Tr data-testid="flight" key={item.id}>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
      >
        {item.id}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="10.875rem"
      >
        <p>{item.code}</p>
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="8.375rem"
      >
        {getCityFromAirport(item.airportFrom, destinations.content)}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="7.188rem"
      >
        {getCityFromAirport(item.airportTo, destinations.content)}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="11.661rem"
      >
        {format(new Date(item.departureDateTime), 'dd.MM.y hh:mm')}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="11.77rem"
      >
        {format(new Date(item.arrivalDateTime), 'dd.MM.y hh:mm')}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="10.77rem"
      >
        {aircraftModel ? aircraftModel[findIndx(item.aircraftId)].model : null}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        w="9.77rem"
      >
        {item.flightStatus}
      </Td>
      <Td
        background={item.id % 2 === 0 ? 'rgba(217, 217, 217, 0.15)' : 'white'}
        borderRight="0.0625rem solid #D9D9D9"
        padding="0.25rem"
      >
        <DropdownMenuFlights
          id={item.id}
          onDeleteClick={() => onDeleteFlight(item.id)}
          onEditClick={onEditClick}
        />
      </Td>
    </Tr>
  ));
  return (
    <Flex
      zIndex="1"
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
      <ModalRemove
        isOpen={isOpen}
        onClose={onClose}
        textBody="Вы действительно хотите удалить этот рейс?"
        onDelete={onDeleteClick}
        itemOnDelete={flightToDelete}
      />
    </Flex>
  );
};
export default FlightsTable;
