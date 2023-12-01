import {
  TInputField,
  TInputFields,
} from '@interfaces/admin-modal-form.intefaces';

export const prepareAdminModalFormFieldUtils = (
  formInputs: TInputFields | TInputField[]
): TInputField[] => {
  if (Array.isArray(formInputs)) {
    return formInputs;
  }
  return Object.entries(formInputs).map(
    ([name, inputField]) =>
      ({
        ...inputField,
        name,
      } as TInputField)
  );
};
