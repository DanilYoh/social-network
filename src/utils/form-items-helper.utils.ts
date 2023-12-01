import { getInitialValues } from '@utils/get-initial-values.utils';
import { getValidationScheme } from '@utils/get-validation-scheme.utils';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

interface FormItemsHelper<T extends string> {
  items: FieldsObject<T>;
  initialValues?: Partial<Record<T, string>>;
}

export const formItemsHelper = <T extends string>({
  items,
  initialValues,
}: FormItemsHelper<T>) => {
  const updatedInitialValues = getInitialValues<T>({
    items,
    initialValues: initialValues || {},
  });
  const validationSchema = getValidationScheme<T>({ items });
  return {
    initialValues: updatedInitialValues,
    validationSchema,
  };
};
