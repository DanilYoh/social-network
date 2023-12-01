import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  InputGroup,
} from '@chakra-ui/react';
import { Field, FieldProps } from 'formik';
import { FC } from 'react';
import { FaExclamation } from 'react-icons/fa';

import { CardInputProps } from '@interfaces/payment.interfaces';

const CardInput: FC<CardInputProps> = ({
  label,
  error,
  touch,
  id,
  type,
  placeholder,
  value,
  maxLength,
  handleChange,
}) => {
  const errorStyle = {
    boxShadow: '0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)',
    borderColor: '#BD0909',
  };
  const basicStyle = {
    boxShadow: '0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)',
    borderColor: '#D9D9D9',
  };
  let style: object;

  if (error && touch) {
    style = errorStyle;
  } else style = basicStyle;
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id} fontWeight="600" mb={0} fontSize="0.75rem">
        {label}
      </FormLabel>
      <InputGroup>
        <Field>
          {({ field }: FieldProps) => (
            <input
              {...field}
              value={value}
              maxLength={maxLength}
              id={id}
              name={id}
              onChange={handleChange}
              type={type}
              placeholder={placeholder}
              style={{
                ...{
                  width: '100%',
                  border: '1px solid',
                  borderRadius: '0.3125rem',
                  padding: '0 16px',
                  color: '#000',
                  fontSize: '0.9975rem',
                  height: '2.8725rem',
                  outline: 'none',
                },
                ...style,
              }}
            />
          )}
        </Field>
      </InputGroup>
      {error && touch && (
        <FormErrorMessage
          fontSize="0.8775rem"
          fontFamily="Inter"
          fontWeight={400}
          mt="0.75rem"
        >
          <Icon as={FaExclamation} />
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export default CardInput;
