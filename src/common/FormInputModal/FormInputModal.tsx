import { FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

interface IInputPropsForm {
  label: string;
  name: string;
  placeholder: string;
  error?: string;
  touch?: boolean;
}

const FormInputModal: FC<IInputPropsForm> = ({
  label,
  name,
  placeholder,
  error,
  touch,
}) => {
  FormInputModal.defaultProps = {
    error: '',
    touch: false,
  };
  const getStyles = (errors: boolean, touched: boolean) => {
    if (errors && touched) {
      return {
        border: '0.0625rem solid red',
      };
    }
  };

  return (
    <FormControl isInvalid={!!error && touch}>
      <FormLabel htmlFor={name} fontSize="xs" mb="0">
        {label}
      </FormLabel>
      <Field
        data-testid="input"
        id={name}
        height="2.5rem"
        fontSize="0.875rem"
        borderRadius="0.125rem"
        backgroundColor="#F9F9F9"
        as={Input}
        style={getStyles(!!error, !!touch)}
        placeholder={placeholder}
        name={name}
      />
      {error && touch ? (
        <Text marginTop={0} color="red" fontSize="10">
          {error}
        </Text>
      ) : null}
    </FormControl>
  );
};

export default FormInputModal;
