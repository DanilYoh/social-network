import { FC } from 'react';
import { Flex, Box, Text, Image } from '@chakra-ui/react';

import { AdditionalServicesTitle } from '@/common/AdditionalServices/AdditionalServicesTitle';
import { AdditionalServicesHeader } from '@/common/AdditionalServices/Header/AdditionalServicesHeader';
import { AdditionalServicesFooter } from '@/common/AdditionalServices/Footer/AdditionalServicesFooter';
import { ExtraBaggageTable } from '@components/ExtraBaggageTable';
import flightIcon from '@images/flight.png';

const ExtraBaggage: FC = () => (
  <>
    <AdditionalServicesTitle label="extra baggage" />
    <AdditionalServicesHeader />
    <Flex w="100%" direction="column">
      <Box pl={{ mdp: 140 }} pb={{ mdp: 50 }} mt="2rem">
        <Text fontSize={24} color="#0A66C2">
          Departing Flight
        </Text>
        <Flex fontSize={14}>
          <Text>Zurich (ZRH) </Text>
          <Image ml={3} mr={3} src={flightIcon} alt="" />
          <Text>New York (JFK)</Text>
        </Flex>
        <Box fontSize={12} color="#000000B5">
          <Text>4 Jul, Monday </Text>
          <Text>Departure Time: 09:30</Text>
        </Box>
        <ExtraBaggageTable />
      </Box>
      <Box pl={{ mdp: 140 }} pb={{ mdp: 50 }}>
        <Text fontSize={24} color="#0A66C2">
          Return Flight
        </Text>
        <Flex fontSize={14}>
          <Text>Zurich (ZRH) </Text>
          <Image ml={3} mr={3} src={flightIcon} alt="" />
          <Text>New York (JFK)</Text>
        </Flex>
        <Box fontSize={12} color="#000000B5">
          <Text>8 Jul, Monday </Text>
          <Text>Departure Time: 18:00</Text>
        </Box>
        <ExtraBaggageTable />
      </Box>
    </Flex>
    <AdditionalServicesFooter />
  </>
);

export default ExtraBaggage;
