import { FieldInputProps } from 'formik/dist/types';
import { FormEvent } from 'react';

import { FieldPartialProps } from '@/types/form-mocks.types';
import { FormikSubmit } from '@interfaces/form-callback-object.interfaces';
import { FieldsObject, FieldUnions } from '@interfaces/form-unions.interfaces';
import {
  CustomSelect,
  Option,
  SelectField,
  VersionSelect,
} from '@interfaces/form-select.interfaces';
import { InputField } from '@interfaces/form-input.interfaces';
import { IUseOptions } from '@interfaces/use-select-options.interfaces';

type Field<T extends string = string> = Pick<
  FieldInputProps<string>,
  'name'
> & { name: T };

export interface IInputElementMock {
  field: Field;
  item: Partial<FieldUnions>;
}

export interface ISelectV2Mock {
  field: Field;
  item: Pick<SelectField, 'version'>;
}

export interface ISelectVersions2Mock {
  field: Field;
  item: Pick<VersionSelect, 'version'>;
}

export interface ISelectDestinations2Mock {
  field: Field;
  item: Pick<VersionSelect, 'placeholder'>;
  useOptions: IUseOptions;
}

export interface ISelectCustom2Mock {
  field: Field;
  item: Pick<CustomSelect, 'placeholder' | 'options'>;
}

export interface IInputV2Mock {
  field: Field;
  item: Pick<InputField, 'placeholder'>;
}

export interface ISelectBaseMock {
  item: Pick<SelectField, 'placeholder'>;
  isLoading: boolean;
  options: Option[];
  field: FieldInputProps<string> | null;
}

export interface IFormOuterMock<K extends string = string> {
  items: FieldsObject<K>;
  onSubmit: FormikSubmit<K>;
  buttonText: string;
}

export interface IFromInnerMock<K extends string = string> {
  items: FieldsObject<K>;
  props: { [Key in K]: FieldPartialProps<Key> };
  handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
  buttonText: string;
}

export interface IFormControlV2Mock<N extends string = string>
  extends FieldPartialProps<N> {
  label: string;
  name: N;
  item: Partial<FieldUnions>;
}

export interface IFieldV2Mock<N extends string = string> {
  name: N;
  item: FieldUnions;
  props: FieldPartialProps<N>;
}
