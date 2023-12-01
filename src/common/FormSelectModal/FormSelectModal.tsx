import { FormControl, FormLabel, Text } from '@chakra-ui/react';
import { Field } from 'formik';
import { FC } from 'react';

interface ISelectPropsForm {
  label: string;
  name: string;
  data: string[];
  error?: string;
  touch?: boolean;
  load?: boolean;
  getCityName?: (a: string) => void;
}

const FormSelectModal: FC<ISelectPropsForm> = ({
  label,
  name,
  data,
  error,
  touch,
  load,
  getCityName,
}) => {
  FormSelectModal.defaultProps = {
    error: '',
    touch: false,
    load: false,
    getCityName: (a) => a,
  };
  const handleClick = (
    event: Event & {
      target: HTMLSelectElement;
    }
  ) => {
    const { target } = event;
    if (getCityName) {
      getCityName(target.value);
    }
  };

  const getStyles = (errors: boolean, touched: boolean) => {
    if (errors && touched) {
      return {
        boxShadow: '0 0 0 1px #E53E3E',
        borderRadius: '0.125rem',
      };
    }
    return {
      border: '1px solid #D9D9D9',
      borderRadius: '0.125rem',
    };
  };

  return (
    <FormControl isInvalid={!!error && touch}>
      <FormLabel htmlFor={name} fontSize="xs" mb="0">
        {label}
      </FormLabel>
      <div style={getStyles(!!error, !!touch)}>
        <Field
          onClick={handleClick}
          as="select"
          style={{
            backgroundColor: '#F9F9F9',
            borderRadius: '0.125rem',
            width: '100%',
            fontSize: '0.875rem',
            height: '2.5rem',
            outline: 'none',
          }}
          name={name}
          list={name}
          disabled={load}
        >
          <option value="" disabled>
            {data.length === 0 ? 'Загрузка... ' : 'Выберите значение...'}
          </option>
          {data.map((text) => (
            <option value={text} key={text}>
              {text}
            </option>
          ))}
        </Field>
      </div>
      {error && touch ? (
        <Text marginTop={0} color="red" fontSize="10">
          {error}
        </Text>
      ) : null}
    </FormControl>
  );
};

export default FormSelectModal;
