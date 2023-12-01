import { makeTypedEntries } from '@utils/helpers.utils';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

export const getObjectValuesByProperty = <
  T extends string,
  R,
  Key extends keyof FieldsObject<T>[T]
>(
  obj: FieldsObject<T>,
  property: Key,
  defaultValue: R
) =>
  Object.fromEntries(
    makeTypedEntries(obj).map(([key, value]) => [
      key,
      value[property] || defaultValue,
    ])
  ) as {
    [K in T]: Required<FieldsObject<T>[T]>[Key];
  };
