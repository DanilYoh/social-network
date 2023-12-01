import { Th, Thead, Tr } from '@chakra-ui/react';

const TicketsTableHead = () => {
  const tableHead = [
    'ID',
    'ФИО',
    'Номер билета',
    'Код',
    'Отлет',
    'Прилет',
    'Номер посадки',
    '',
  ];
  return (
    <Thead>
      <Tr border="0.0688rem solid #D9D9D9">
        {tableHead.map((item) => (
          <Th
            key={item}
            color="black"
            border="0.0625rem solid #D9D9D9"
            textTransform="none"
            data-testid="table-h"
          >
            {item}
          </Th>
        ))}
      </Tr>
    </Thead>
  );
};
export default TicketsTableHead;
