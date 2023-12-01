import React, { useState } from 'react';
import { Button, Flex, useTheme } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router';

import { NewLogo } from '@common/NewLogo';
import { ClientTheme } from '@interfaces/client-theme.interfaces';

const ClientHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [isHomeLoading, setIsHomeLoading] = useState(false);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsButtonLoading(true);
    const redirectPath =
      location.pathname === '/new-sign-in' ? '/new-sign-up' : '/new-sign-in';
    navigate(redirectPath);
    setIsButtonLoading(false);
  };

  const handleHomeClick = () => {
    setIsHomeLoading(true);
    navigate('/');
  };

  const { client }: ClientTheme = useTheme();

  return (
    <Flex
      as="header"
      bgColor={client.bg}
      justify="space-between"
      alignItems="center"
      h="5rem"
      w="100%"
      pl="1.6875rem"
      pr="1.375rem"
      data-testid="client-header"
    >
      <NewLogo />
      <Flex gap="28px">
        <Button
          isLoading={isButtonLoading}
          size="md"
          onClick={handleButtonClick}
          color={client.primary['5']}
          _hover={{ bg: client.primary['1'] }}
          _active={{ bg: client.primary['3'] }}
        >
          {location.pathname === '/new-sign-up' ? 'Вход' : 'Регистрация'}
        </Button>
        <Button
          isLoading={isHomeLoading}
          size="md"
          onClick={handleHomeClick}
          color={client.primary['5']}
          _hover={{ bg: client.primary['1'] }}
          _active={{ bg: client.primary['3'] }}
        >
          На главную
        </Button>
      </Flex>
    </Flex>
  );
};

export default ClientHeader;
