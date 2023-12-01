import { ISelectBaseMock } from '@interfaces/form-mocks.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'filled' | 'empty' | 'notLoaded' | 'loaded';

export const selectBaseMocks: Record<TMocks, ISelectBaseMock> = {
  filled: {
    item: { placeholder: 'Select' },
    field: null,
    options: [
      { label: 'label1', value: 'value1' },
      { label: 'label2', value: 'value2' },
      {
        label: 'label3',
        value: 'value3',
      },
    ],
    isLoading: false,
  },
  empty: {
    item: { placeholder: 'Select' },
    field: null,
    options: [],
    isLoading: false,
  },
  notLoaded: {
    item: { placeholder: 'Select' },
    field: null,
    options: [],
    isLoading: true,
  },
  loaded: {
    item: { placeholder: 'Select' },
    field: null,
    options: [],
    isLoading: false,
  },
};
