import { CloseButton, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@components/LoginForm';

const Login: FC = () => {
  const navigate = useNavigate();

  return (
    <Flex maxH="auto" alignSelf="center">
      <Flex
        flexDir="column"
        w={{ sm: '100%', md: '24.975rem' }}
        h={{ sm: '102vh', md: 'auto' }}
        mt="3rem"
        mb="auto"
        bgColor="#FFF"
        color="rgba(78, 76, 76, 0.71)"
        fontWeight="600"
        fontSize="0.75rem"
        border="1px solid #D9D9D9"
        borderRadius="0.125rem"
      >
        <Flex h="4.6875rem" p="0.435rem 0.6225rem" w="100%" flexDir="column">
          <CloseButton
            alignSelf="flex-end"
            color="#04396D"
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
          flexDir="column"
        >
          <Heading as="h2" fontSize="0.975rem" size="md" data-testid="heading">
            Sign in to your account
          </Heading>
          <LoginForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Login;
