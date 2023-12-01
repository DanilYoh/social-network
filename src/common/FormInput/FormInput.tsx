import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
} from '@chakra-ui/react';
import { Field } from 'formik';
import type { FC } from 'react';
import { useState } from 'react';
import { FaExclamation } from 'react-icons/fa';

import { ShowPassword } from '@common/ShowPassword';
import { FormInputProps } from '@interfaces/signin-form.interfaces';

const FormInput: FC<FormInputProps> = ({
  label,
  error,
  touch,
  focus,
  id,
  type,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isInvalid={!!error && !!touch}>
      <FormLabel htmlFor={id} fontWeight="600" mb={0} fontSize="0.75rem">
        {label}
      </FormLabel>
      <InputGroup>
        <Field
          as={Input}
          id={id}
          name={id}
          data-testid={id}
          aria-label={id}
          type={
            id !== 'password'
              ? type
              : id === 'password' && show
              ? 'text'
              : 'password'
          }
          autoFocus={focus}
          color="#000"
          fontSize="0.9975rem"
          height="2.8725rem"
          boxShadow="0 0.1275rem 0.1275rem rgba(0, 0, 0, 0.25)"
          className={!!error && !!touch ? 'field-error' : 'field'}
        />
        {type === 'password' && (
          <ShowPassword handleClick={handleClick} show={show} />
        )}
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

export default FormInput;
