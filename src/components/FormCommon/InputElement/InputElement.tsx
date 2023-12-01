import { FC } from 'react';
import { FieldInputProps } from 'formik/dist/types';

import { InputV2 } from '@components/FormCommon/InputV2';
import { SelectV2 } from '@components/FormCommon/SelectV2';
import { FieldUnions } from '@interfaces/form-unions.interfaces';

interface InputElement {
  item: FieldUnions;
  field: FieldInputProps<string>;
  isLoading: boolean;
}

const InputElement: FC<InputElement> = ({ field, item, isLoading }) => {
  switch (item.type) {
    case 'input':
      return <InputV2 item={item} field={field} isLoading={isLoading} />;
    case 'select':
      return <SelectV2 item={item} field={field} isLoading={isLoading} />;
    default:
      throw new Error(`There is no current input type`);
  }
};

export default InputElement;
