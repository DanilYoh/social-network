import { Box, Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { Membership } from '@components/Membership';
import { SignUpForm } from '@components/SignUpForm';

const SignUp: FC = () => (
  <Box
    w="100%"
    overflow="hidden"
    bgColor="#FFF"
    mb="5.625rem"
    background="none"
  >
    <Flex flexDirection={{ sm: 'column', dt: 'row' }} ml={{ dt: '1.875rem' }}>
      <SignUpForm />
      <Flex
        h={{ sm: '0', dt: '81vh' }}
        w="0.0625rem"
        background="#9d9d9d"
        zIndex="1000"
      />
      <Membership />
    </Flex>
  </Box>
);

export default SignUp;
