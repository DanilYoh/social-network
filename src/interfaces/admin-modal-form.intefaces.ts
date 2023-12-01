export const fieldTypesArray = [
  'text',
  'email',
  'password',
  'tel',
  'number',
] as const;

type IInput = (typeof fieldTypesArray)[number];

interface IField<T> {
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: T;
  validate?: (value: T) => string | undefined;
}

export interface IHiddenField extends IField<string> {
  type: 'hidden';
  label: undefined;
}

export interface IInputField extends IField<string> {
  type: IInput;
}

export interface ICheckboxField extends IField<boolean> {
  type: 'checkbox';
}

export interface IOption {
  value: string | number;
  name: string;
}

export interface ISelectField extends IField<string | number> {
  type: 'select';
  options: IOption[];
}

export interface IDatepicker extends IField<string | Date> {
  type: 'datepicker';
  activeDates?: Date[];
}

export type TInputField =
  | ISelectField
  | IInputField
  | IHiddenField
  | ICheckboxField
  | IDatepicker;

export type IFormValues<T extends TInputField[]> = {
  [K in T[number]['name']]: T[number]['type'] extends 'checkbox' | 'radio'
    ? boolean
    : string;
};

export type TInputFields = {
  [key: string]: Omit<TInputField, 'name'> & {
    name?: string;
    options?: IOption[];
    activeDates?: Date[];
  };
};
