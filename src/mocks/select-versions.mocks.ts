import { ISelectVersions2Mock } from '@interfaces/form-mocks.interfaces'; // Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'destinations' | 'invalid';

export const selectVersionsMocks: Record<TMocks, ISelectVersions2Mock> = {
  destinations: {
    item: { version: 'destinations' },
    field: { name: 'select' },
  },
  invalid: {
    item: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      version: 'invalid',
    },
    field: { name: 'select' },
  },
};
