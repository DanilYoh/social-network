import { Select } from '@chakra-ui/react';
import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { Option, SelectField } from '@interfaces/form-select.interfaces';

interface SelectBaseProps {
  item: Exclude<SelectField, 'options'>;
  options: Option[];
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const SelectBase: FC<SelectBaseProps> = ({
  field,
  item,
  isLoading,
  options,
}) => (
  <Select
    height="2.5rem"
    fontSize="0.875rem"
    borderRadius="0.125rem"
    backgroundColor="#F9F9F9"
    isDisabled={isLoading}
    placeholder={item.placeholder}
    {...field}
    {...item.restProps}
  >
    {options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))}
  </Select>
);

export default SelectBase;
