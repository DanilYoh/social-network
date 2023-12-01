import { FC } from 'react';
import { Text, Tr, Td } from '@chakra-ui/react';

import { ExtraBaggageChecked } from '@components/ExtraBaggageChecked';

const ExtraBaggageTableRow: FC<{ num: number; name: string }> = ({
  num,
  name,
}) => (
  <Tr>
    <Td pl={0} border="none">
      <Text pb="20px" fontSize={14}>
        {num}. Passenger{' '}
      </Text>
      <Text fontSize={12}>{name}</Text>
      <Text textTransform="uppercase" fontSize={12} color="#000000B5">
        ECONOMY (ECO LIGHT)
      </Text>
    </Td>
    <Td border="none" fontSize={12} color="#000000B5">
      <Text>1 piece cabin baggage (max 8kg)</Text>
      <Text>1 piece checked baggage (max 30 kg) </Text>
    </Td>
    <ExtraBaggageChecked id={num} />
  </Tr>
);

export default ExtraBaggageTableRow;
