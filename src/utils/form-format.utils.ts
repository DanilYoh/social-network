import { allPropertiesToStringUtils } from '@utils/all-properties-to-string.utils';
import { formatDatePropsUtils } from '@utils/format-date-props.utils';
import { formatRecord } from '@utils/format-record.utils';
// Форматирует поля объекта формы перед отправкой на сервер или перед подачей на значения инициализации формы

export const formFormat = <
  T extends string,
  IE extends boolean,
  DF extends Array<T> = Array<T>,
  NF extends Array<T> = Array<T>
>(
  values: Record<T, PropertyKey>,
  dateFields: DF,
  numberFields: NF,
  isEdit: IE
) => {
  const stringProps = allPropertiesToStringUtils<T>(values);
  const numberStrings = formatRecord<
    number,
    T,
    Record<T, string>,
    typeof Number
  >(stringProps, numberFields, Number);
  const dateProps = formatDatePropsUtils(isEdit)(stringProps, dateFields);
  return {
    ...stringProps,
    ...numberStrings,
    ...dateProps,
  };
};
