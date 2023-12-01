import { Flex, useTheme } from '@chakra-ui/react';
import React from 'react';

import { ClientSignUpForm } from '@components/ClientSignUpForm';
import { ClientTheme } from '@interfaces/client-theme.interfaces';

const NewSignUpPage = () => {
  const { client }: ClientTheme = useTheme();

  return (
    <Flex
      w="100%"
      h="calc(100vh - 160px)"
      justify="center"
      align="center"
      bg={client.bgSecondary}
      data-testid="new-sign-up-page"
    >
      <Flex
        w="37.5rem"
        h="43.75rem"
        bg={client.white}
        p="1.625rem 3.125rem"
        borderRadius="1rem"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
      >
        <ClientSignUpForm />
      </Flex>
    </Flex>
  );
};

export default NewSignUpPage;
