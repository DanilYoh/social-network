import { InputField } from '@interfaces/form-input.interfaces';
import { SelectField } from '@interfaces/form-select.interfaces';

export type FieldUnions = InputField | SelectField;
export type FieldsObject<V extends string = string> = {
  [K in V]: FieldUnions;
};
