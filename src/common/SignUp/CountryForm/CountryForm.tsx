import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

import Validate from '@icons/validate';
import { IProps } from '@interfaces/formik.interfaces';

const CountryForm: FC<IProps> = (props) => {
  const { errors, touched } = props;
  return (
    <FormControl
      w={{ sm: '80%', dt: 'calc(0.3125*100%)', md: '40%' }}
      isInvalid={
        !!errors.passportIssuingCountry && !!touched.passportIssuingCountry
      }
      pt="1.5rem !important"
    >
      <FormLabel
        htmlFor="country"
        fontFamily="Open Sans"
        fontSize="0.875rem"
        fontWeight="400"
        lineHeight="1.1875rem"
        color="rgba(78, 76, 76, 0.71)"
        ml="0.3125rem"
        mb="-0.0625rem"
      >
        Country of Residence
      </FormLabel>
      <Field
        as={Select}
        border="0.0625rem solid #D9D9D9"
        boxShadow="0rem 0.125rem 0.125rem rgba(0, 0, 0, 0.25)"
        fontSize="0.9375rem"
        textAlign="center"
        borderRadius="0.25rem"
        aria-label="country"
        h="2.875rem"
        color="black"
        data-testid="country"
        name="passportIssuingCountry"
        validate={(value: string) => {
          if (!value) return 'please complete field';
        }}
      >
        <option disabled label=" " />
        {[
          'Russia',
          'United States',
          'Germany',
          'Japan',
          'Sweden',
          'Denmark',
          'Canada',
        ].map((el) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
        ;
      </Field>
      <FormErrorMessage fontSize="0.875rem">
        <Validate w="1.5625rem" h="2.875rem" mr="-0.3125rem" p="0" />
        {errors.passportIssuingCountry}
      </FormErrorMessage>
    </FormControl>
  );
};

export default CountryForm;
