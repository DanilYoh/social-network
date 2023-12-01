import {
  Box,
  Container,
  Flex,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import NewLogoBlue from '@icons/newLogoBlue';
import { IChildrenProps } from '@interfaces/app.interfaces';

const AdminFooter: FC<IChildrenProps> = () => (
  <Box
    as="footer"
    width="100%"
    maxHeight="5rem"
    borderTop="1px"
    borderColor="#C2C2C2"
  >
    <Container
      maxWidth="100%"
      bg="#f5f5f5"
      pt={['0.75rem', '0.75rem', '1.438rem']}
      pb={['0.75rem', '0.75rem', '1.438rem']}
      pl={{ sm: '0.6248rem', smp: '2.625rem' }}
      pr={{ sm: '0.6248rem', smp: '2.625rem' }}
    >
      <Flex
        width="100%"
        flexDirection={{ mdp: 'row' }}
        justify="space-between"
        position="relative"
        bottom="0"
        rowGap="0.6rem"
        alignItems="center"
      >
        <Text fontSize="14px" color="#141414">
          &copy; Air Alien {new Date().getFullYear()}
        </Text>
        <ChakraLink as={Link} to="/home" style={{ textDecoration: 'none' }}>
          <NewLogoBlue />
        </ChakraLink>
      </Flex>
    </Container>
  </Box>
);

export default AdminFooter;
