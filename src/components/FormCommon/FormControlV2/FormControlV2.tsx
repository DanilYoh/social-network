import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { FC } from 'react';
import { JSX } from 'react/jsx-dev-runtime';
import { FieldMetaProps } from 'formik/dist/types';

interface FormControlV2 {
  children: JSX.Element | string;
  label: string;
  name: string;
  meta: FieldMetaProps<string>;
}

const FormControlV2: FC<FormControlV2> = ({ meta, name, label, children }) => (
  <FormControl isInvalid={Boolean(meta.touched && meta.error)}>
    <FormLabel aria-label={name} htmlFor={name} fontSize="xs" mb="0">
      {label}
    </FormLabel>
    {children}
    <FormErrorMessage fontSize="10">{meta.error}</FormErrorMessage>
  </FormControl>
);

export default FormControlV2;
