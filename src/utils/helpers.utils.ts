import { Entries } from '@/types/entries.types';

export const makeTypedEntries = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as Entries<T>;
