import { FC } from 'react';
import { Flex, Text, Box, Button, Divider, Image } from '@chakra-ui/react';

import logoSmall from '@images/logo-small.svg';
import dash from '@images/footer-dash.svg';
import PaymentCard from '@/components/PaymentCard/PaymentCard';
import PaymentMethods from '@/components/PaymentMethods/PaymentMethods';

const Payment: FC = () => (
  <>
    <Flex
      pl={178}
      pt={95}
      pb={110}
      w="100%"
      alignItems="flex-start"
      direction="column"
      bgColor="#FFF"
    >
      <Text mb={45} fontSize="24px" color="#0A66C2">
        Choose your payment method
      </Text>
      <PaymentMethods />
      <PaymentCard />
    </Flex>
    <Flex
      as="footer"
      p="1.0625rem 1.5625rem .5625rem"
      backgroundColor="#04396D"
      color="#fff"
      justifyContent="space-between"
      alignItems={{ base: 'center', dt: 'flex-start' }}
      flexDirection={{ base: 'column', dt: 'row' }}
    >
      <Flex
        flex="1 0 50%"
        mb={{ base: '1rem', dt: 0 }}
        alignItems={{ base: 'center', dt: 'flex-start' }}
      >
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'flex-end', mdp: 'flex-start' }}
        >
          <Box
            mr={{ base: 0, md: '1.444rem' }}
            textTransform="uppercase"
            fontSize=".875rem"
            fontWeight={700}
          >
            Departure
          </Box>
          <Box textTransform="uppercase" fontSize=".875rem" fontWeight={700}>
            ZRH-JFK
          </Box>
          <Flex
            flexDirection={{ base: 'row', md: 'column' }}
            justifyContent="space-between"
            height="64px"
            pt={2}
            pl={2}
            pr={2}
          >
            <Image src={dash} />
            <Image src={logoSmall} />
          </Flex>
          <Box textTransform="uppercase" fontSize=".75rem" fontWeight={700}>
            <Text>4 Jul, Mo</Text>
            <Text>Departure 09:30</Text>
            <Text>ECONOMY - Eco Light</Text>
            <Text>UA0018</Text>
          </Box>
        </Flex>
        <Divider
          orientation="vertical"
          backgroundColor="#D9D9D9"
          h={{ base: '3rem', dt: '3.6875rem' }}
          boxShadow=".5px 0px 0px #D9D9D9"
          m="0 2.5rem"
        />
        <Flex flexDirection={{ base: 'column', md: 'row' }}>
          <Box
            mr="1.444rem"
            textTransform="uppercase"
            fontSize=".875rem"
            fontWeight={700}
          >
            return
          </Box>
          <Box textTransform="uppercase" fontSize=".875rem" fontWeight={700}>
            JFK-ZRH
          </Box>
          <Flex
            flexDirection={{ base: 'row', md: 'column' }}
            justifyContent="space-between"
            height="64px"
            pt={2}
            pl={2}
            pr={2}
          >
            <Image src={dash} />
            <Image src={logoSmall} />
          </Flex>
          <Box textTransform="uppercase" fontSize=".75rem" fontWeight={700}>
            <Text>8 Jul, Fr</Text>
            <Text>Departure 18:00</Text>
            <Text>ECONOMY - Eco Light</Text>
            <Text>UA0032</Text>
          </Box>
        </Flex>
      </Flex>
      <Flex
        flex="1 0 50%"
        alignItems="center"
        justifyContent={{ base: 'center', dt: 'flex-end' }}
        flexWrap="wrap"
      >
        <Flex
          mr={{ base: 0, dt: '1.851rem' }}
          mb={{ base: '1rem', dt: 0 }}
          fontSize="1rem"
          fontWeight={700}
          flexDirection="column"
          alignItems={{ base: 'center', dt: 'flex-end' }}
          flex={{ base: '0 0 100%', dt: '0 0 50%' }}
        >
          <Box textAlign="right" whiteSpace="nowrap">
            Total Price for 2 Passengers
          </Box>
          <Box textTransform="uppercase">CHF 6,110.00</Box>
        </Flex>
        <Button
          type="button"
          aria-label="confirm"
          backgroundColor="#E32E22"
          fontSize=".875rem"
          fontWeight={700}
          h="2.5rem"
          textTransform="uppercase"
          p="0 2.3125rem"
          _hover={{ backgroundColor: '#e61f12' }}
          _active={{ backgroundColor: '#e61f12' }}
          transition="background-color .3s ease"
        >
          confirm
        </Button>
      </Flex>
    </Flex>
  </>
);

export default Payment;
