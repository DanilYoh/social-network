import { IInputV2Mock } from '@interfaces/form-mocks.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'first';

export const inputV2Mocks: Record<TMocks, IInputV2Mock> = {
  first: {
    item: { placeholder: 'Input' },
    field: { name: 'input' },
  },
};
