import { FC, useState } from 'react';
import { Text, Flex, Radio, Image, RadioGroup, Stack } from '@chakra-ui/react';

import { useAppSelector } from '@/hooks';

export const DepartingFlight: FC = () => {
  const [value, setValue] = useState('1');
  const { id } = useAppSelector((state) => state.seats);

  return (
    <>
      <Text fontSize="20px" pos="relative" top={30} left={29} color="blue">
        Departing Flight
      </Text>
      <Flex flexDirection="column" left="30px" pos="relative" top="-30px">
        <Text fontSize="14px" top={10} pos="relative">
          Zurich(ZRH)
        </Text>
        <Text fontSize="10px" color="grey" top="40px" pos="relative">
          4 jul Monday
        </Text>
        <Image pos="relative" left="100px" top="-25px" />
      </Flex>
      <Flex flexDirection="column" pos="absolute" left="170px" top="73px">
        <Text fontSize="14px">New York(JFK)</Text>
        <Text fontSize="10px" color="grey">
          Departure time:9:30
        </Text>
      </Flex>
      <RadioGroup onChange={setValue} value={value}>
        <Stack direction="column" pos="relative" left={{ sm: 5, md: 10 }}>
          <Radio value="1" pos="relative" top={5}>
            1. Passenger
          </Radio>
          <Flex flexWrap="wrap" width="110px" pos="relative" top={5}>
            <Text fontSize="13px">Michele Muller</Text>
            <Text fontSize="10px" color="grey">
              {' '}
              Adult
            </Text>
          </Flex>
          <Flex pos="relative" top={5}>
            <Text
              pos="relative"
              marginLeft={{ sm: '150px', md: '180px' }}
              top="-72px"
            >
              Seat
              <Text fontSize="13px">{id}</Text>
            </Text>
            <Text
              pos="relative"
              marginLeft={{ sm: '50px', md: '100px' }}
              top="-72px"
            >
              Price
              <Text fontSize="13px">CHF 0,00</Text>
            </Text>
          </Flex>
          <Radio value="2" pos="relative" top="40px">
            2. Passenger
          </Radio>
          <Flex flexWrap="wrap" width="110px" top="40px" pos="relative">
            <Text fontSize="13px">Michele Muller</Text>
            <Text fontSize="10px" color="grey">
              {' '}
              Adult
            </Text>
          </Flex>
          <Flex>
            <Text
              pos="relative"
              marginLeft={{ sm: '150px', md: '180px' }}
              top="-32px"
            >
              Seat
              <Text fontSize="13px">18A</Text>
            </Text>
            <Text
              pos="relative"
              marginLeft={{ sm: '50px', md: '100px' }}
              top="-32px"
            >
              Price
              <Text fontSize="13px">CHF 0,00</Text>
            </Text>
          </Flex>
        </Stack>
      </RadioGroup>
    </>
  );
};
