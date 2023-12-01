import { CloseButton, Flex, Heading } from '@chakra-ui/react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo } from '@common/Logo';
import { SignInForm } from '@components/SignInForm';

const SignIn: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex justify="flex-end" w="100%" maxH="auto">
      <Flex
        flexDir="column"
        w={{ sm: '100%', md: '24.975rem' }}
        h={{ sm: '102vh', md: 'auto' }}
        m={{ sm: '-4.6875rem 0rem 0rem 0rem', md: '0.81rem 7.5rem 3rem auto' }}
        bgColor="#FFF"
        borderBottomRadius="0.5025rem"
        color="rgba(78, 76, 76, 0.71)"
        fontWeight="600"
        fontSize="0.75rem"
        boxShadow="0 0.2475rem 0.2475rem rgba(0, 0, 0, 0.25)"
        zIndex="1002"
      >
        <Flex
          h="4.6875rem"
          bg="#04396D"
          p="0.435rem 0.6225rem"
          mb="3.75rem"
          w="100%"
          justify="space-between"
        >
          <Logo />
          <CloseButton
            color="#FFF"
            size="lg"
            mt="0.9375rem"
            type="button"
            data-testid="close"
            onClick={() => navigate('/')}
          />
        </Flex>
        <Flex
          pl={{ sm: '1.2525rem', md: '2.1225rem' }}
          pr={{ sm: '2.175rem', md: '3.225rem' }}
          mb="3.6225rem"
          flexDir="column"
        >
          <Heading as="h2" fontSize="0.975rem" size="md" data-testid="heading">
            Sign in to your account
          </Heading>
          <SignInForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignIn;
