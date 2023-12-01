import { FieldInputProps, FieldMetaProps } from 'formik/dist/types';

export type FieldPartialProps<N extends string = string> = {
  field: Pick<FieldInputProps<string>, 'name'> & { name: N };
  meta: Pick<FieldMetaProps<string>, 'touched' | 'error'>;
};
