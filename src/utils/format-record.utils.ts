// Выбирает из объекта поля, применяет на них коллбек и вовзращает новый объект с выбранными полями

import { makeTypedEntries } from '@utils/helpers.utils';

export const formatRecord = <
  R extends number | string,
  T extends string,
  K extends Record<T, string>,
  CB extends (arg: string) => R
>(
  obj: K,
  props: Array<T>,
  cb: CB
): Record<T, R> =>
  Object.fromEntries(
    makeTypedEntries(obj)
      .filter(([key]) => props.includes(key as T))
      .map(([key, value]) => [key, cb(value)])
  ) as Record<T, R>;
