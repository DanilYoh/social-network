import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useParams } from 'react-router';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { GetAircraftSeatsServices } from '@/store/thunks/seat.thunk';
import { Pagination } from '@common/Pagination';
import { SeatInterfaceContent } from '@interfaces/seat-interface.interfaces';
import { TableFields } from '@components/TableFields';
import { seatsSlice } from '@/store/seats.slice';

import styles from './TableSeats.module.css';

const thData: string[] = [
  'ID сиденья',
  'Номер сиденья',
  'Класс',
  'Неподвижное сиденье',
  'Близко к экстренному выходу',
  '',
];
const TableSeats = () => {
  const [pageCount, setPageCount] = useState(10);
  const [howMuchToShow, setHowMuchToShow] = useState(10);
  const { seats, editMode } = useAppSelector((state) => state.seats);
  const params = useParams();

  const aircraftId = params.seat && params.seat.split(';')[0];

  const actualSeats: SeatInterfaceContent[] = [];
  seats.content.forEach((el) => {
    if (aircraftId) {
      if (String(el.aircraftId) === aircraftId) {
        actualSeats.push(el);
      }
    }
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    setPageCount(Math.ceil(actualSeats.length / 10));
  }, [actualSeats.length, seats]);

  useEffect(() => {
    // eslint-disable-next-line
    dispatch(GetAircraftSeatsServices());
  }, [dispatch]);

  const stopEdit = () => {
    dispatch(seatsSlice.actions.setEditModeFalse());
  };
  const stopSubEdit = () => {
    dispatch(seatsSlice.actions.setSubmitEditTrue());
    dispatch(seatsSlice.actions.setEditModeFalse());
  };
  return (
    <div>
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
            {actualSeats
              .slice(howMuchToShow - 10, howMuchToShow)
              .map((item) => (
                <TableFields
                  key={item.id}
                  aircraftId={item.aircraftId}
                  category={item.category}
                  id={item.id}
                  isLockedBack={item.isLockedBack}
                  isNearEmergencyExit={item.isNearEmergencyExit}
                  seatNumber={item.seatNumber}
                />
              ))}
          </Tbody>
        </Table>
      </TableContainer>
      <div className={styles.footer}>
        <Pagination
          data-testid="navigation"
          handlePageClick={(event) => {
            setHowMuchToShow(10 * (event.selected + 1));
          }}
          pageCount={pageCount}
          initialPage={0}
        />
        {editMode && (
          <div className={styles.footerBtns}>
            <Button onClick={stopEdit}>Отменить</Button>
            <Button onClick={stopSubEdit}>Отправить</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableSeats;
