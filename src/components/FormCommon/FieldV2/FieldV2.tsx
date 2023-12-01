import { FC } from 'react';
import { FieldProps } from 'formik/dist/Field';
import { Field } from 'formik';

import { FormControlV2 } from '@components/FormCommon/FormControlV2';
import { InputElement } from '@components/FormCommon/InputElement';
import { FieldUnions } from '@interfaces/form-unions.interfaces';

type FieldV2 = {
  name: string;
  item: FieldUnions;
  isLoading: boolean;
};

const FieldV2: FC<FieldV2> = ({ item, name, isLoading }) => (
  <Field name={name} colorScheme="purple">
    {({ field, meta }: FieldProps<string>) => (
      <FormControlV2 label={item.label} name={name} meta={meta}>
        <InputElement field={field} item={item} isLoading={isLoading} />
      </FormControlV2>
    )}
  </Field>
);
export default FieldV2;
