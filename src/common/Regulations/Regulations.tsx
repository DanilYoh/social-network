import { Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Regulations: FC = () => (
  <Flex
    maxW="30.75rem"
    flexDirection="column"
    boxShadow="0 0.25rem 0.25rem rgba(0, 0, 0, 0.25)"
    rowGap="0.75rem"
    p="0.9375rem 0.6248rem 0.6248rem 0.4373rem"
    bgColor="#FFF"
    borderRadius="0.2475rem"
  >
    <Heading
      as="h3"
      fontWeight="600"
      fontSize="0.8752rem"
      lineHeight="1.125rem"
      color="#0A66C2"
    >
      Travel Regulations
    </Heading>

    <Text
      fontWeight="400"
      fontSize="0.6248rem"
      lineHeight="0.8752rem"
      color="rgba(0, 0, 0, 0.71)"
    >
      Dear Passengers, <br />
      We recommend that you review our{' '}
      <RouterLink
        data-testid="travel-link"
        to="/travel"
        style={{ textDecoration: 'underline', color: '#0A66C2' }}
      >
        Travel Regulations Page
      </RouterLink>
      for all updates and recent developments of country-specific travel
      restrictions and travel requirements due to{' '}
      <RouterLink
        data-testid="covid-link"
        to="/covid"
        style={{
          color: '#E32E22',
          fontWeight: '600',
        }}
      >
        COVID-19
      </RouterLink>
      .
    </Text>
  </Flex>
);

export default Regulations;
