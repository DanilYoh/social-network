import { FieldInputProps } from 'formik/dist/types';

import { IInputElementMock } from '@interfaces/form-mocks.interfaces';
import { FieldUnions } from '@interfaces/form-unions.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'input' | 'select' | 'invalid';

export const inputElementMocks: Record<TMocks, IInputElementMock> = {
  input: {
    item: { placeholder: 'Input', type: 'input' },
    field: { name: 'input' },
  },
  select: {
    item: {
      placeholder: 'Select',
      type: 'select',
      options: [],
      version: 'custom',
    },
    field: { name: 'select' },
  },
  invalid: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    item: { type: 'input2' } as FieldUnions,
    field: {} as FieldInputProps<string>,
  },
};
