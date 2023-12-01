import { merge } from 'merge-anything';

import { getObjectValuesByProperty } from '@utils/objects-by-property.utils';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

interface GetInitialValues<T extends string> {
  items: FieldsObject<T>;
  initialValues: Partial<Record<T, string>>;
}

export const getInitialValues = <T extends string>({
  items,
  initialValues,
}: GetInitialValues<T>) => {
  const resultInitialValues = getObjectValuesByProperty(
    items,
    'initialValue',
    ''
  );
  return merge(resultInitialValues, initialValues);
};
