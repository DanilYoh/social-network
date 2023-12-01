import React, { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

export const SeatSection: FC = () => (
  <Box
    display="grid"
    top={{ sm: 1200, md: 160 }}
    left={{ sm: 0, md: 900 }}
    gridGap={2}
    width={{ sm: 365, md: 550 }}
    height={120}
    gridAutoFlow="row dense"
    backgroundColor="white"
    border="1px solid #A6A6A6"
    position="absolute"
  >
    <Flex
      position="relative"
      left={0}
      top={{ sm: 5, md: 10 }}
      justifyContent="space-around"
    >
      <Box
        width={{ sm: 25, md: 30 }}
        height={{ sm: 25, md: 30 }}
        backgroundColor="white"
        border="2px solid grey"
      />
      <Box
        width={{ sm: 25, md: 30 }}
        height={{ sm: 25, md: 30 }}
        backgroundColor="white"
        border="2px solid grey"
      />
      <Box
        width={{ sm: 25, md: 30 }}
        height={{ sm: 25, md: 30 }}
        backgroundColor="white"
        border="2px solid grey"
      />
      <Box
        width={{ sm: 25, md: 30 }}
        height={{ sm: 25, md: 30 }}
        backgroundColor="white"
        border="2px solid grey"
      />
    </Flex>
    <Flex
      position="relative"
      left={0}
      top={{ sm: 1, md: 6 }}
      justifyContent="space-around"
    >
      <Box
        width={{ sm: 25, md: 30 }}
        height="6px"
        backgroundColor="blue.200"
        borderTop="2px solid grey"
      />
      <Box
        width={{ sm: 25, md: 30 }}
        height="6px"
        backgroundColor="orange"
        borderTop="2px solid grey"
      />
      <Box
        width={{ sm: 25, md: 30 }}
        height="6px"
        backgroundColor="red"
        borderTop="2px solid grey"
      />
      <Box
        width={{ sm: 25, md: 30 }}
        height="6px"
        backgroundColor="grey"
        borderTop="2px solid grey"
      />
    </Flex>
    <Flex flexWrap="wrap">
      <Text
        fontSize="10px"
        color="grey"
        width={20}
        height={5}
        top={{ sm: -1, md: 4 }}
        pos="relative"
        left={{ sm: 5, md: 10 }}
      >
        Economy seat
      </Text>
      <Text
        fontSize="10px"
        color="grey"
        height={5}
        top={{ sm: -1, md: 4 }}
        pos="relative"
        width={{ sm: 20, md: 125 }}
        left={{ sm: 25, md: 75 }}
      >
        Seat with extra Leg Room
      </Text>
      <Text
        fontSize="10px"
        color="grey"
        height={5}
        top={{ sm: -1, md: 4 }}
        pos="relative"
        left={{ sm: 45, md: 95 }}
        width={{ sm: 20, md: 105 }}
      >
        Emergency/Exit Seat
      </Text>
      <Text
        fontSize="10px"
        color="grey"
        height={5}
        top={{ sm: -1, md: 4 }}
        pos="relative"
        left={{ sm: 65, md: 145 }}
        width={{ sm: '47px', md: 105 }}
      >
        Occupied Seat
      </Text>
    </Flex>
    <Flex flexWrap="wrap">
      <Text
        fontSize="10px"
        color="blue"
        height={5}
        pos="relative"
        left={{ sm: 5, md: 10 }}
      >
        FREE
      </Text>
      <Text
        fontSize="10px"
        color="grey"
        height={5}
        pos="relative"
        left={{ sm: 79, md: 135 }}
      >
        +CHF18
      </Text>
      <Text
        fontSize="10px"
        color="grey"
        pos="relative"
        left={{ sm: '145px', md: '235px' }}
      >
        +CHF18
      </Text>
    </Flex>
  </Box>
);
