import { ISelectCustom2Mock } from '@interfaces/form-mocks.interfaces'; // Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'empty' | 'filled';

export const selectCustomMocks: Record<TMocks, ISelectCustom2Mock> = {
  empty: {
    item: { placeholder: 'SomeText', options: [] },
    field: { name: 'select' },
  },
  filled: {
    item: {
      placeholder: 'SomeText',

      options: [
        { label: 'label1', value: 'value1' },
        { label: 'label2', value: 'value2' },
        {
          label: 'label3',
          value: 'value3',
        },
      ],
    },
    field: { name: 'select' },
  },
};
