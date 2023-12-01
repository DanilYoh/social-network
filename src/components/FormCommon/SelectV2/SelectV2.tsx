import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { SelectField } from '@interfaces/form-select.interfaces';
import { SelectCustom } from '@components/FormCommon/SelectCustom';
import { SelectVersions } from '@components/FormCommon/SelectVersions';

interface SelectV2Props {
  item: SelectField;
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const SelectV2: FC<SelectV2Props> = ({ item, ...rest }) => {
  switch (item.version) {
    case 'custom':
      return <SelectCustom item={item} {...rest} />;
    default:
      return <SelectVersions item={item} {...rest} />;
  }
};

export default SelectV2;
