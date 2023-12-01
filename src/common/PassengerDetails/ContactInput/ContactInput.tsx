import {
  InputGroup,
  FormLabel,
  Box,
  Select,
  Flex,
  Divider,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ContactInput = () => (
  <>
    <InputGroup maxW="40.015rem" w="100%" mb="1.356rem">
      <FormLabel maxW={{ base: '100%', dt: '19.64rem' }} w="100%" m={0}>
        <Box
          as="span"
          fontSize=".6875rem"
          color="rgba(78, 76, 76, 0.71)"
          pl=".25rem"
        >
          Contact Person
        </Box>
        <Box position="relative" flex="1 1 auto">
          <Box
            position="absolute"
            fontSize=".5rem"
            color="#0A66C2"
            top=".4rem"
            left=".8rem"
          >
            Please select main contact person
          </Box>
          <Select
            data-testid="contactPerson"
            boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
            color="#757575"
            aria-label="contact person"
          />
        </Box>
      </FormLabel>
    </InputGroup>
    <InputGroup
      maxW="40.015rem"
      w="100%"
      mb={{ base: '2rem', dt: '3.375rem' }}
      flexWrap="wrap"
    >
      <FormLabel
        flex={{ base: '0 0 100%', dt: '1 1 50%' }}
        maxW={{ base: '100%', dt: '19.64rem' }}
        m="0 .735rem 0 0"
      >
        <Box
          as="span"
          fontSize=".6875rem"
          color="rgba(78, 76, 76, 0.71)"
          pl=".25rem"
        >
          Mobile Number
        </Box>
        <Flex
          boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
          borderRadius=".375rem"
          border="1px solid #d9d9d9"
          h="2.5rem"
        >
          <Box
            position="relative"
            flex="1 1 auto"
            maxW={{ base: '30%', smp: '25%', dt: '6rem' }}
            w="100%"
          >
            <Box
              position="absolute"
              fontSize=".5rem"
              color="#0A66C2"
              top=".4rem"
              left=".8rem"
            >
              Country Code
            </Box>
            <Select
              data-testid="countryCode"
              color="#757575"
              aria-label="country code"
              borderRadius={0}
              border={0}
            />
          </Box>
          <Divider
            orientation="vertical"
            h="1.981rem"
            w="1px"
            backgroundColor="#A6A6A6"
            m="auto 0"
          />
          <Input
            data-testid="tel"
            type="tel"
            aria-label="tel"
            borderRadius={0}
            border="0 !important"
          />
        </Flex>
      </FormLabel>
      <FormLabel
        flex={{ base: '0 0 100%', dt: '1 1 50%' }}
        maxW={{ base: '100%', dt: '19.64rem' }}
        m="0"
      >
        <Box
          as="span"
          fontSize=".6875rem"
          color="rgba(78, 76, 76, 0.71)"
          pl=".25rem"
        >
          E-mail Address
        </Box>
        <Input
          data-testid="email"
          type="email"
          aria-label="email"
          boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
        />
      </FormLabel>
    </InputGroup>
    <InputGroup
      maxW="40.015rem"
      w="100%"
      flexDirection={{ base: 'column', smp: 'row' }}
    >
      <Checkbox
        aria-label="allow email notifications"
        mr="1.3125rem"
        iconSize="0.1275rem"
        borderColor="#868484"
        mb={{ base: '1rem', smp: 0 }}
      >
        <Box
          as="span"
          fontSize=".6875rem"
          color="rgba(0, 0, 0, 0.71)"
          fontWeight={500}
          display="flex"
          alignItems="center"
        >
          Allow Notifications via E-mail
        </Box>
      </Checkbox>
      <Checkbox
        aria-label="allow sms notifications"
        iconSize="0.1275rem"
        borderColor="#868484"
      >
        <Box
          as="span"
          fontSize=".6875rem"
          color="rgba(0, 0, 0, 0.71)"
          fontWeight={500}
          display="flex"
          alignItems="center"
        >
          Allow Notifications via E-mail
        </Box>
        <Link to="/additional-services">Next page</Link>
      </Checkbox>
    </InputGroup>
  </>
);

export default ContactInput;
