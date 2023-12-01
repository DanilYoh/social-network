import {
  Box,
  Flex,
  InputGroup,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { type FC } from 'react';

import { IPassengerInput } from '@interfaces/passenger-details.interfaces';

const PassengerInput: FC<IPassengerInput> = ({ passengerNumber }) => (
  <Flex
    justifyContent="space-between"
    mb={{ base: '1rem', dt: '4.461rem' }}
    _last={{ marginBottom: 0 }}
    flexDirection={{ base: 'column', dt: 'row' }}
  >
    <Box fontSize=".75rem" fontWeight={600} pt="1rem">
      Passenger {passengerNumber}:
    </Box>
    <Flex flexDirection="column" flex="1 0 auto" maxW="40.015rem">
      <InputGroup mb="1.356rem" flexWrap="wrap">
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
            First Name
          </Box>
          <Input
            data-testid="firstName"
            type="text"
            boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
            aria-label="first name"
          />
        </FormLabel>
        <FormLabel
          flex={{ base: '0 0 100%', dt: '1 1 50%' }}
          maxW={{ base: '100%', dt: '19.64rem' }}
          m={0}
        >
          <Box
            as="span"
            fontSize=".6875rem"
            color="rgba(78, 76, 76, 0.71)"
            pl=".25rem"
          >
            Last Name
          </Box>
          <Input
            data-testid="lastName"
            type="text"
            boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
            aria-label="last name"
          />
        </FormLabel>
      </InputGroup>
      <InputGroup>
        <FormLabel w="100%" m={0}>
          <Box
            as="span"
            fontSize=".6875rem"
            color="rgba(78, 76, 76, 0.71)"
            pl=".25rem"
          >
            Date of Birth
          </Box>
          <Flex w="100%">
            <Box position="relative" flex="1 1 auto" maxW="9.5rem" mr=".886rem">
              <Box
                position="absolute"
                fontSize=".5rem"
                color="#0A66C2"
                top=".4rem"
                left=".5rem"
              >
                Day
              </Box>
              <Select
                data-testid="birthDay"
                boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                color="#757575"
                aria-label="day of birth"
              />
            </Box>
            <Box
              position="relative"
              flex="1 1 auto"
              maxW="12.687rem"
              mr=".886rem"
            >
              <Box
                position="absolute"
                fontSize=".5rem"
                color="#0A66C2"
                top=".4rem"
                left=".5rem"
              >
                Month
              </Box>
              <Select
                data-testid="birthMonth"
                boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                color="#757575"
                aria-label="month of birth"
              />
            </Box>
            <Box position="relative" flex="1 1 auto" maxW="9.5rem">
              <Box
                position="absolute"
                fontSize=".5rem"
                color="#0A66C2"
                top=".4rem"
                left=".5rem"
              >
                Year
              </Box>
              <Select
                data-testid="birthYear"
                boxShadow="0px 2px 2px rgba(0, 0, 0, 0.25)"
                color="#757575"
                aria-label="year of birth"
              />
            </Box>
          </Flex>
        </FormLabel>
      </InputGroup>
    </Flex>
  </Flex>
);

export default PassengerInput;
