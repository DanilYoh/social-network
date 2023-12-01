import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { CustomSelect } from '@interfaces/form-select.interfaces';
import { SelectBase } from '@components/FormCommon/SelectBase';

interface SelectV2Props {
  item: CustomSelect;
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const SelectCustom: FC<SelectV2Props> = ({ field, item, isLoading }) => (
  <SelectBase
    item={item}
    field={field}
    isLoading={isLoading}
    options={item.options}
  />
);

export default SelectCustom;
