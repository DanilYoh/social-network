import { Input } from '@chakra-ui/react';
import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { InputField } from '@interfaces/form-input.interfaces';

interface InputV2Props {
  item: InputField;
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const InputV2: FC<InputV2Props> = ({ item, field, isLoading }) => {
  const testId =
    item.restProps?.type === 'datetime-local' ? 'datetime-local' : undefined;
  return (
    <Input
      height="2.5rem"
      fontSize="0.875rem"
      borderRadius="0.125rem"
      backgroundColor="#F9F9F9"
      data-testid={testId}
      isDisabled={isLoading}
      {...item.restProps}
      placeholder={item.placeholder}
      {...field}
    />
  );
};

export default InputV2;
