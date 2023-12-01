import * as Yup from 'yup';

export type BaseInput<P> = {
  label: string;
  validate?: Yup.StringSchema<string, Yup.AnyObject, undefined, ''>;
  initialValue?: string;
  placeholder?: string;
  restProps?: P;
};
