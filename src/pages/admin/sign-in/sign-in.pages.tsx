import { CloseButton, Flex, Heading } from '@chakra-ui/react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@components/LoginForm';

const AdminSignIn: FC = () => {
  const navigate = useNavigate();
  return (
    <Flex justify="flex-end" w="100%" maxH="auto">
      <Flex
        flexDir="column"
        w={{ sm: '100%', md: '25rem' }}
        h={{ sm: '27.5rem', md: 'auto' }}
        m={{ sm: '-4.6875rem 0rem 0rem 0rem', md: '3rem auto ' }}
        bgColor="#FFF"
        border="1px solid #D9D9D9"
        fontWeight="600"
        fontSize="0.75rem"
        boxShadow="0 0.2475rem 0.2475rem rgba(0, 0, 0, 0.25)"
      >
        <Flex justify="flex-end" mt="0.9375rem" pr={{ sm: '1rem' }}>
          <CloseButton
            color="#04396D"
            size="md"
            type="button"
            data-testid="close"
            onClick={() => navigate('/')}
          />
        </Flex>
        <Flex
          pl={{ sm: '1.2525rem', md: '2.1225rem' }}
          pr={{ sm: '2.175rem', md: '3.225rem' }}
          mb="1.25rem"
          flexDir="column"
        >
          <Heading
            as="h2"
            fontSize="0.975rem"
            size="md"
            data-testid="heading"
            color="rgba(78, 76, 76, 0.71)"
          >
            Sign in as admin
          </Heading>
          <LoginForm />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AdminSignIn;
