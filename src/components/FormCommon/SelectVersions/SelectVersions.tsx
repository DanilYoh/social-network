import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { VersionSelect } from '@interfaces/form-select.interfaces';
import { SelectDestinations } from '@components/FormCommon/SelectDestinations';

interface SelectV2Props {
  item: VersionSelect;
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const SelectVersions: FC<SelectV2Props> = ({ item, ...rest }) => {
  switch (item.version) {
    case 'destinations':
      return <SelectDestinations item={item} {...rest} />;
    default:
      throw new Error('Select version is not defined');
  }
};
export default SelectVersions;
