import { ISelectDestinations2Mock } from '@interfaces/form-mocks.interfaces'; // Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'loading' | 'loaded';

export const selectDestinationsMocks: Record<TMocks, ISelectDestinations2Mock> =
  {
    loading: {
      useOptions: {
        isLoading: true,
        options: [],
      },
      item: { placeholder: 'SomeText' },
      field: { name: 'select' },
    },
    loaded: {
      item: {
        placeholder: 'SomeText',
      },
      field: { name: 'select' },
      useOptions: {
        isLoading: false,
        options: [
          { label: 'label1', value: 'value1' },
          { label: 'label2', value: 'value2' },
          {
            label: 'label3',
            value: 'value3',
          },
        ],
      },
    },
  };
