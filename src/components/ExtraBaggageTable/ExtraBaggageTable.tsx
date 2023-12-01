/* eslint-disable no-return-assign */
import { FC } from 'react';
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';

import { useAppSelector } from '@/hooks';
import { ExtraBaggageTableRow } from '@components/ExtraBaggageTableRow';

const ExtraBaggageTable: FC = () => {
  const passengers = useAppSelector((state) => state.baggage);

  return (
    <TableContainer overflow="auto">
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th border="none" />
            <Th border="none" textTransform="none">
              Your Selected Baggage Allowance
            </Th>
            <Th border="none" color="#0A66C2" textTransform="none">
              Add Extra Checked Baggage (max 30 kg)?{' '}
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {passengers.map((el, ind) => (
            <ExtraBaggageTableRow num={ind + 1} name={el.name} key={el.id} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ExtraBaggageTable;
