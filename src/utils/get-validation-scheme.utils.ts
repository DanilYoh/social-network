import * as Yup from 'yup';

import { getObjectValuesByProperty } from '@utils/objects-by-property.utils';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

interface GetValidationScheme<T extends string> {
  items: FieldsObject<T>;
}

export const getValidationScheme = <T extends string>({
  items,
}: GetValidationScheme<T>) =>
  Yup.object(
    getObjectValuesByProperty(
      items,
      'validate',
      Yup.string().required('please complete field')
    ) as Record<string, Yup.StringSchema<string>>
  );
