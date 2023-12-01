import { Flex, Tab, Text } from '@chakra-ui/react';
import { SetStateAction, Dispatch, FC } from 'react';

import RadioCheck from '@/common/icons/radioChek';
import { TSeatSet } from '@/interfaces/flight-card';

interface IFlightClass extends TSeatSet {
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
  setTabVisible: () => void;
}

const FlightClass: FC<
  Pick<
    IFlightClass,
    'id' | 'price' | 'category' | 'tab' | 'setTab' | 'setTabVisible'
  >
> = ({ price, category, tab, setTab, id, setTabVisible }) => (
  <Tab
    data-testid="flightClassTab"
    padding={0}
    onClick={() => {
      setTab(id);
      setTabVisible();
    }}
    border="none"
    _active={{ background: 'none' }}
  >
    <Flex
      color="rgba(0, 0, 0, 0.71)"
      fontSize="14px"
      fontWeight={600}
      justifyContent="space-around"
      width="280px"
      height="75px"
      border="1px solid #D9D9D9"
      boxShadow="0px 1px 1px #D9D9D9"
      borderRadius="2px"
    >
      <Flex gap="0 8px" justifyContent="center" alignItems="center">
        <RadioCheck tab={tab} id={id} />
        <Text data-testid="category" fontSize="12px">
          {category.categoryType}
        </Text>
      </Flex>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Text color="rgba(78, 76, 76, 0.71)" fontSize="12px" fontWeight={400}>
          Per Passenger
        </Text>
        <Text>CHF {price}</Text>
      </Flex>
    </Flex>
  </Tab>
);

export default FlightClass;
