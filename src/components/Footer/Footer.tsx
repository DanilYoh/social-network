import { Divider, Flex, Link as ChakraLink, Text } from '@chakra-ui/react';
import { Link, useLocation, matchRoutes } from 'react-router-dom';

import { Appstore, Googleplay } from '@common/icons';

const Footer = () => {
  const routes = [
    { path: '/search/results' },
    { path: '/additional-services' },
    { path: '/payment' },
  ];
  const useCurrentPath = () => {
    const location = useLocation();
    return matchRoutes(routes, location);
  };

  return !useCurrentPath() ? (
    <Flex
      as="footer"
      w="100%"
      h="5.625rem"
      bg="#04396d"
      flexDirection={{ sm: 'column', mdp: 'row' }}
      justify="space-between"
      position="relative"
      bottom="0"
      rowGap="0.6rem"
      alignItems="center"
      pt={['0.75rem', '0.75rem', '1.575rem']}
      pb={['0.75rem', '0.75rem', '1.575rem']}
      pl={{ sm: '0.6248rem', smp: '2.6873rem' }}
      pr={{ sm: '0.6248rem', smp: '2.6873rem' }}
    >
      <Flex color="white" columnGap="0.8752rem">
        <Flex alignItems="center">
          <Link
            to="/about"
            aria-label="about us"
            style={{ whiteSpace: 'nowrap' }}
          >
            About Us
          </Link>
        </Flex>
        <Divider
          orientation="vertical"
          w="0.0625rem"
          h="0.9375rem"
          bg="#d9d9d9"
          transform="translateY(0.1245rem)"
        />
        <Flex alignItems="center">
          <Link to="/terms" aria-label="rules" style={{ whiteSpace: 'nowrap' }}>
            {' '}
            Terms and Conditions
          </Link>
        </Flex>
        <Divider
          orientation="vertical"
          w="0.0625rem"
          h="0.9375rem"
          bg="#d9d9d9"
          transform="translateY(0.1245rem)"
        />
        <Flex alignItems="center">
          <Link
            to="/contacts"
            aria-label="contact us"
            style={{ whiteSpace: 'nowrap' }}
          >
            Contact Us
          </Link>
        </Flex>
      </Flex>
      <Flex alignItems="center" columnGap="3.75rem">
        <Text
          fontFamily="Open Sans"
          display={{ sm: 'none', md: 'inherit' }}
          fontWeight="700"
          fontSize="0.8752rem"
          lineHeight="1.1872rem"
          color="white"
          whiteSpace="nowrap"
          transform={{
            sm: 'translate(0.75rem,0rem)',
            dt: 'translate(-0.2497rem,0.375rem)',
          }}
        >
          UX AIR APP
        </Text>

        <Flex columnGap="1.2503rem">
          <ChakraLink
            aria-label="apple store"
            href="https://www.apple.com/ru/app-store/"
            data-testid="appstore"
          >
            <Appstore />
          </ChakraLink>
          <ChakraLink
            aria-label="google play"
            href="https://play.google.com/"
            data-testid="gplay"
          >
            <Googleplay />
          </ChakraLink>
        </Flex>
      </Flex>
    </Flex>
  ) : null;
};

export default Footer;
