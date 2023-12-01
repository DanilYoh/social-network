import React from 'react';
import { Box, Flex, Link, useTheme } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { NewLogo } from '@common/NewLogo';
import { ClientTheme } from '@interfaces/client-theme.interfaces';

const ClientFooter = () => {
  const { client }: ClientTheme = useTheme();

  return (
    <Flex
      as="footer"
      bg={client.bg}
      justify="space-between"
      alignItems="center"
      h="5rem"
      w="100%"
      pl="2rem"
      pr="1.5rem"
      data-testid="client-footer"
    >
      <Flex gap="2.5652rem">
        <Link as={RouterLink} to="/" color={client.white} fontSize="1rem">
          О нас
        </Link>
        <Link as={RouterLink} to="/" color={client.white} fontSize="1rem">
          Политика конфиденциальности
        </Link>
        <Link as={RouterLink} to="/" color={client.white} fontSize="1rem">
          Связаться с нами
        </Link>
      </Flex>
      <Box transform="scale(0.7)">
        <NewLogo />
      </Box>
    </Flex>
  );
};

export default ClientFooter;
