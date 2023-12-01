import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { VersionSelect } from '@interfaces/form-select.interfaces';
import { SelectBase } from '@components/FormCommon/SelectBase';
import { useTicketDestinations } from '@/hooks/useTicketDestinations/useTicketDestinations';

interface SelectV2Props {
  item: VersionSelect;
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const SelectDestinations: FC<SelectV2Props> = ({ field, item, isLoading }) => {
  const { options, isLoading: isOptionsLoading } = useTicketDestinations();
  return (
    <SelectBase
      item={item}
      field={field}
      isLoading={isLoading || isOptionsLoading}
      options={options}
    />
  );
};
export default SelectDestinations;
