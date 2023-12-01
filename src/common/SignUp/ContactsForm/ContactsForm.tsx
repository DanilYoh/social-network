import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

import Validate from '@icons/validate';
import { IProps } from '@interfaces/formik.interfaces';

const ContactsForm: FC<IProps> = (props) => {
  const { errors, values, touched } = props;
  const validateEmail = (value: string) => {
    if (!value) return 'please complete field';
    if (!value.match(/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      return 'your email address has to contain: @';
    }
  };
  const validatePhone = () => {
    if (!values.phone || !values.phoneCode) return 'please complete field';
    if (
      !values.phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    )
      return 'please enter your number as per format (XXX) xxx xx xx';
  };
  return (
    <Flex
      justifyContent="space-between"
      w="full"
      pt="1.5625rem"
      flexDirection={{ sm: 'column', md: 'row' }}
    >
      <FormControl
        w={{ sm: '80%', md: 'calc(0.4866*100%)' }}
        isInvalid={!!errors.email && touched.email}
      >
        <FormLabel
          htmlFor="email"
          fontFamily="Open Sans"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="1.1875rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.6875rem"
          mb="-0.0625rem"
        >
          E-mail Address
        </FormLabel>
        <Field
          as={Input}
          h="2.875rem"
          id="email"
          name="email"
          data-testid="email"
          aria-label="email"
          type="text"
          variant="filled"
          boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          bg="white"
          validate={validateEmail}
          className={
            !!errors.email && !!touched.email ? 'field-error' : 'field'
          }
        />
        <FormErrorMessage fontSize="0.875rem">
          <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
          {errors.email}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        w={{ sm: '80%', md: 'calc(0.4866*100%)' }}
        isInvalid={
          !!errors.phoneGroup && (!!touched.phone || !!touched.phoneCode)
        }
      >
        <FormLabel
          htmlFor="phone"
          fontFamily="Open Sans"
          fontSize="0.875rem"
          fontWeight="400"
          lineHeight="1.1875rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0rem"
          mb="0.3125rem"
        >
          Mobile Number
        </FormLabel>
        <Field as="div" name="phoneGroup" validate={validatePhone}>
          <InputGroup>
            <Box
              position="absolute"
              color={values.phoneCode === '' ? '#0A66C2' : '#a6a6a6'}
              fontSize="0.625rem"
              lineHeight="0.75rem"
              top="0rem"
              left="4.5%"
              fontFamily="Duru Sans"
            >
              <Text display={{ sm: 'none', md: 'none', dl: 'inherit' }}>
                Country Code
              </Text>
              <Text display={{ sm: 'inherit', md: 'inherit', dl: 'none' }}>
                Code
              </Text>
            </Box>
            <InputLeftElement width="33%">
              <Select
                border="0.0625rem solid #D9D9D9"
                borderRight="none"
                boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
                borderRadius="0.25rem"
                name="phoneCode"
                id="phoneCode"
                data-testid="phoneCode"
                aria-label="phone code"
                textAlign="center"
                height="3.125rem"
                p="0"
                fontSize="0.875rem"
                fontWeight="600"
                position="absolute"
                borderTopRightRadius="none"
                borderBottomRightRadius="none"
                defaultValue=""
                h="2.875rem"
                transform="translateY(0.1875rem)"
              >
                <option disabled label=" " />
                {['+7', '+1', '+49', '+81', '+46', '+45'].map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </InputLeftElement>
            <Input
              border="0.0625rem solid #D9D9D9"
              boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
              borderRadius="0.25rem"
              bg="white"
              ml="33%"
              name="phone"
              id="phone"
              aria-label="phone"
              data-testid="phone"
              borderTopLeftRadius="none"
              borderBottomLeftRadius="none"
              borderLeft="none"
              h="2.875rem"
              placeholder="(XXX) XXX XX XX"
              _focus={{
                borderLeft: '0.125rem solid #0A66C2',
                borderTopLeftRadius: '0.3125rem',
                borderBottomLeftRadius: '0.3125rem',
              }}
            />
          </InputGroup>
        </Field>

        {!!errors.phoneGroup && !!touched.phoneGroup ? (
          <FormErrorMessage fontSize="0.875rem">
            <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
            {values.phone && values.phoneCode
              ? errors.phoneGroup
              : errors.phoneGroup}
          </FormErrorMessage>
        ) : null}
      </FormControl>
    </Flex>
  );
};

export default ContactsForm;
