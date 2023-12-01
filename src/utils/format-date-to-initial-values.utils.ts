import { dateToField } from '@utils/date-helper.utils';
import { formatRecord } from '@utils/format-record.utils';

export const formatDateToInitialValues = <
  T extends string,
  K extends Record<T, string>
>(
  obj: K,
  props: Array<T>
): Record<T, string> => formatRecord(obj, props, dateToField);
