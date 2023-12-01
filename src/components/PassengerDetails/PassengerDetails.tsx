import { Flex, Box, Heading, Divider, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { UserIcon } from '@common/UserIcon';
import {
  Subtitle,
  PassengerInput,
  ContactInput,
} from '@common/PassengerDetails';
import PassengersIcon from '@icons/passengers';
import contactsImage from '@assets/images/contacts.png';

const PassengerDetails = () => {
  const [passengersCount] = useState<number>(2);

  return (
    <Flex
      w="100%"
      maxW="69.375rem"
      pt={{ base: 0, dtp: '2.5rem' }}
      flexDirection="column"
    >
      <Flex flexDirection="column" alignItems="flex-end" w="100%" pb=".625rem">
        <Link to="/sign-in" data-testid="signInLink">
          <Flex
            as="span"
            fontSize=".75rem"
            alignItems="center"
            _hover={{ textDecoration: 'underline' }}
          >
            <UserIcon h="1.3rem" w="1.3rem" mr=".25rem" />
            Sign-In
            <Box as="span" fontSize=".625rem" color="#0A66C2" ml=".187rem">
              (Optional)
            </Box>
          </Flex>
        </Link>
        <Heading
          as="h4"
          fontSize="1rem"
          alignSelf="flex-start"
          color="rgba(78, 76, 76, 0.71)"
          fontWeight={600}
          mt={{ base: '.6rem', mdp: '.2rem' }}
        >
          Please enter passenger details
        </Heading>
      </Flex>
      <Divider
        h="1px"
        backgroundColor="#D9D9D9"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
      />
      <Flex
        w="100%"
        p="2.3125rem 0 3.875rem"
        justifyContent="space-between"
        alignItems={{ base: 'center', dt: 'flex-start' }}
        flexDirection={{ base: 'column', dt: 'row' }}
      >
        <Box flex={{ base: '0 0 3rem', dt: '0 0 12rem' }}>
          <Subtitle icon={<PassengersIcon />} title="passengers" />
        </Box>
        <Flex flex="1 0 auto" maxW="49.2rem" flexDirection="column">
          {Array.from({ length: passengersCount }, (_, index) => index).map(
            (index) => (
              <PassengerInput passengerNumber={index + 1} key={index + 1} />
            )
          )}
        </Flex>
      </Flex>
      <Divider
        h="1px"
        backgroundColor="#D9D9D9"
        boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
      />
      <Flex
        w="100%"
        p="2.3125rem 0"
        justifyContent="space-between"
        flexDirection={{ base: 'column', dt: 'row' }}
        alignItems={{ base: 'center', dt: 'flex-start' }}
      >
        <Box flex={{ base: '0 0 3rem', dt: '0 0 12rem' }}>
          <Subtitle
            icon={<Image src={contactsImage} mr=".5rem" />}
            title="contact details"
          />
        </Box>
        <Flex
          flex="1 0 auto"
          maxW="49.2rem"
          flexDirection="column"
          alignItems="flex-end"
        >
          <ContactInput />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PassengerDetails;
