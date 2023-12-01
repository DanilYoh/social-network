import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { Link as LinkR } from 'react-router-dom';

import { Benefits, Close } from '@common/icons';
import { MembershipLinks } from '@common/MembershipLinks';

const Membership: FC = () => (
  <Flex
    w={{ sm: '100%', md: '100%', dt: '40vw' }}
    m={{ sm: 'auto', dt: '0' }}
    pl="calc(0.14380*41.66%)"
    pr="calc(0.1523*41.66%)"
    pt="9rem"
    flexDirection="column"
    fontFamily="Open Sans"
    color="rgba(0, 0, 0, 0.71)"
    position="relative"
    bgColor="#FFF"
    pb={{ sm: '1.2525rem', dt: '0' }}
  >
    <Heading
      as="h2"
      fontWeight="400"
      fontSize="1.5rem"
      lineHeight="2.0625rem"
      color="#0A66C2"
      pr="3.435rem"
    >
      Enjoy your Benefits with your UX AIR account.
    </Heading>
    <Flex
      flexDirection="column"
      fontSize="0.81rem"
      lineHeight="1.125rem"
      rowGap="2.175rem"
      mt="1.8rem"
      pl="2.925rem"
      pt="0.75rem"
      position="relative"
    >
      <Benefits position="absolute" top="0.1875rem" left="-0.2475rem" />
      <Text as="p">
        Create Your Account{' '}
        <Text as="span" fontWeight="700">
          free of charge
        </Text>
      </Text>
      <Text as="p" pr="30%">
        Save your personal information for{' '}
        <Text as="span" fontWeight="700">
          faster booking
        </Text>
      </Text>
      <Text as="p" mt="-1.2525rem">
        <Text as="span" fontWeight="700">
          Receive special offers and deals
        </Text>{' '}
        if you wish{' '}
      </Text>
      <Text as="p" mt="-0.3rem">
        <Text as="span" fontWeight="700">
          Earn miles
        </Text>{' '}
        as you fly{' '}
      </Text>
      <Text as="p" mt="0.5025rem">
        <Text as="span" fontWeight="700">
          Use your miles
        </Text>{' '}
        for award tickets and ticket upgrades{' '}
      </Text>
      <Text as="p">
        {' '}
        <Text as="span" fontWeight="700">
          Redeem Your miles
        </Text>{' '}
        to purchase extra baggage and seat{' '}
      </Text>
    </Flex>
    <Flex
      fontSize="0.875rem"
      lineHeight="1.1875rem"
      mt={{ sm: 'calc(0.1187*100%)', dt: 'calc(0.3487*100%)' }}
      ml="-0.25rem"
      height="3.4375rem"
    >
      For more details, please visit: &nbsp;
      <LinkR
        aria-label="membership guide link"
        style={{ fontWeight: '700', color: '#0A66C2' }}
        to="/benefits"
      >
        Membership Guide
      </LinkR>
    </Flex>
    <MembershipLinks
      position={{ sm: 'initial', md: 'absolute' }}
      bottom="1.56rem"
      right="4.6875rem"
      columnGap="0.375rem"
      mt="0.6225rem"
      justify="flex-end"
      w="90%"
    />
    <Button
      aria-label="close btn"
      h="1.875rem"
      w="1.875rem"
      p="0"
      bg="white"
      position="absolute"
      top="1.875rem"
      right="2.175rem"
    >
      <Close h="1.875rem" w="1.875rem" />
    </Button>
  </Flex>
);

export default Membership;
