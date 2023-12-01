import { formatDateToInitialValues } from '@utils/format-date-to-initial-values.utils';
import { formatDateToSubmit } from '@utils/format-date-to-submit.utils';

export const formatDatePropsUtils = (isEdit: boolean) => {
  if (isEdit) return formatDateToInitialValues;
  return formatDateToSubmit;
};
