import { FC, useState, useEffect } from 'react';
import { Flex, Text, Td, Box } from '@chakra-ui/react';

import { useAppDispatch } from '@/hooks';
import { changePriceBaggage } from '@/store/price-baggage.slice';
import { Minus, Plus } from '@common/icons';

const ExtraBaggageChecked: FC<{ id: number }> = ({ id }) => {
  const [kg, setKg] = useState(0);
  const price = kg * 125;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changePriceBaggage({ priceBaggage: price, key: id }));
  }, [price, id, dispatch]);

  function handleClick(arg: 'add' | 'del'): void {
    switch (arg) {
      case 'add':
        setKg((num) => num + 1);
        break;
      case 'del':
        kg > 0 ? setKg((num) => num - 1) : null;
        break;

      default:
        break;
    }
  }

  return (
    <Td border="none">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h={57}
        w={419}
        border="1px solid #D9D9D9"
        boxShadow="0px 4px 4px 0px #D9D9D9;"
      >
        <Flex alignItems="center" gap="5px" ml="60px">
          <Box
            onClick={() => {
              handleClick('del');
            }}
            as="button"
          >
            <Minus />
          </Box>
          <Text>{kg} pcs</Text>
          <Box
            onClick={() => {
              handleClick('add');
            }}
            as="button"
          >
            <Plus />
          </Box>
        </Flex>
        <Text mr="60px">CHF {price},00</Text>
      </Flex>
    </Td>
  );
};

export default ExtraBaggageChecked;
