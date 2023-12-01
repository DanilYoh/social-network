import { ISelectV2Mock } from '@interfaces/form-mocks.interfaces'; // Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'custom' | 'versioned';

export const selectV2Mocks: Record<TMocks, ISelectV2Mock> = {
  custom: {
    item: { version: 'custom' },
    field: { name: 'select' },
  },
  versioned: {
    item: {
      version: 'destinations',
    },
    field: { name: 'select' },
  },
};
