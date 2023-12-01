import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

import Validate from '@icons/validate';
import { IProps } from '@interfaces/formik.interfaces';

const NamesForm: FC<IProps> = (props) => {
  const { errors, touched } = props;
  const validateNames = (value: string) => {
    if (!value) return 'please complete field';
    if (!value.match(/^[a-zA-Z\s]*$/)) {
      return 'please enter letters and spaces only';
    }
  };

  const getClasses = (error: boolean, touch: boolean) => {
    if (!!error && !!touch) {
      return 'field-error';
    }
    return 'field';
  };

  return (
    <Flex
      justifyContent="space-between"
      w="full"
      transform="translateY(-1.0625rem)"
      mb="0.0625rem !important"
    >
      <FormControl
        w="calc(0.4866*100%)"
        isInvalid={!!errors.firstName && touched.firstName}
      >
        <FormLabel
          htmlFor="firstName"
          fontFamily="Open Sans"
          fontSize="0.75rem"
          fontWeight="400"
          lineHeight="1rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.6875rem"
        >
          First Name
        </FormLabel>
        <Field
          as={Input}
          id="firstName"
          name="firstName"
          data-testid="firstName"
          aria-label="first name"
          type="text"
          variant="filled"
          border="0.0625rem solid #D9D9D9"
          boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          bg="white"
          validate={validateNames}
          h="2.875rem"
          className={getClasses(!!errors.firstName, !!touched.firstName)}
        />
        <FormErrorMessage fontSize="0.875rem">
          <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
          {errors.firstName}
        </FormErrorMessage>
      </FormControl>
      <FormControl
        w="calc(0.4866*100%)"
        isInvalid={!!errors.lastName && touched.lastName}
      >
        <FormLabel
          htmlFor="lastName"
          fontFamily="Open Sans"
          fontSize="0.75rem"
          fontWeight="400"
          lineHeight="1rem"
          color="rgba(78, 76, 76, 0.71)"
          ml="0.6875rem"
        >
          Last Name
        </FormLabel>
        <Field
          as={Input}
          id="lastName"
          name="lastName"
          data-testid="lastName"
          aria-label="last name"
          type="text"
          variant="filled"
          border="0.0625rem solid #D9D9D9"
          boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
          borderRadius="0.25rem"
          bg="white"
          h="2.875rem"
          validate={validateNames}
          className={getClasses(!!errors.lastName, !!touched.lastName)}
        />
        <FormErrorMessage id="namesError" fontSize="0.875rem">
          <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
          {errors.lastName}
        </FormErrorMessage>
      </FormControl>
    </Flex>
  );
};
export default NamesForm;
