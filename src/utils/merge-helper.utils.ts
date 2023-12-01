import { merge } from 'merge-anything';

import { FieldsObject } from '@interfaces/form-unions.interfaces';

export const mergeObjectInOrder = <K extends string>(
  objVal: FieldsObject<K>,
  newObjVal?: { [Key in keyof FieldsObject<K>]?: Partial<FieldsObject<K>[Key]> }
): FieldsObject<K> => {
  const orderedKeys = Object.keys(objVal) as Array<K>;
  const newMerged = merge(objVal, newObjVal || {}) as FieldsObject<K>;
  const entries = orderedKeys.map((key) => [key, newMerged[key]]);
  return Object.fromEntries(entries) as FieldsObject<K>;
};
