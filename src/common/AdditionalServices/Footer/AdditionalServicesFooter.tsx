import React, { FC, useState } from 'react';
import { Box, Button, Divider, Flex } from '@chakra-ui/react';
import { useLocation, Link } from 'react-router-dom';

import PriceDetails from '@/common/PriceDetails/PriceDetails';

export const AdditionalServicesFooter: FC = () => {
  const [details, setDetails] = useState(false);
  const { pathname } = useLocation();

  let path = '';

  if (pathname === '/additional-services') path = '/baggage';
  if (pathname === '/baggage') path = '/payment';

  return (
    <Flex
      as="footer"
      p="1.0625rem 1.5625rem .5625rem"
      backgroundColor="#04396D"
      color="#fff"
      justifyContent="space-between"
      alignItems={{ base: 'center', dt: 'flex-start' }}
      flexDirection={{ base: 'column', dt: 'row' }}
      top={pathname === '/additional-services' ? { sm: 750, md: 840 } : 0}
      pos="relative"
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
        </Flex>
        <Divider
          orientation="vertical"
          backgroundColor="#D9D9D9"
          h={{ base: '3rem', dt: '3.6875rem' }}
          boxShadow=".5px 0px 0px #D9D9D9"
          m="0 2.5rem"
        />
        <Box>
          <Button
            variant="link"
            color="#F19898"
            size="md"
            onClick={() => setDetails(!details)}
          >
            See Price Details
          </Button>
        </Box>
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
          {details ? <PriceDetails /> : null}

          <Flex justifyContent="space-between" mt="1rem">
            <Box>
              <Box textAlign="right" whiteSpace="nowrap">
                Total Price for 2 Passengers
              </Box>
              <Box textTransform="uppercase" textAlign="right">
                CHF 6,110.00
              </Box>
            </Box>

            <Link to={path}>
              <Button
                type="button"
                aria-label="confirm"
                backgroundColor="#E32E22"
                fontSize=".875rem"
                fontWeight={700}
                h="2.5rem"
                textTransform="uppercase"
                p="0 2.3125rem"
                ml="1rem"
                _hover={{ backgroundColor: '#e61f12' }}
                _active={{ backgroundColor: '#e61f12' }}
                transition="background-color .3s ease"
              >
                confirm
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
