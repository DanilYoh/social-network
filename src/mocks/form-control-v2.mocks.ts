import { IFormControlV2Mock } from '@interfaces/form-mocks.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TProps ключ-название поля мока и через  'prop1'|'prop2'|'prop3'|...'propN'
// чтобы typescript подсказывал какие и где поля можно добавлять

type TProps = {
  success: 'input';
  failed: 'input';
};

type FormControlV2Record<P extends Record<string, string>> = {
  [K in keyof P]: IFormControlV2Mock<P[K]>;
};

export const formControlV2Mocks: FormControlV2Record<TProps> = {
  success: {
    meta: { error: undefined, touched: false },
    name: 'input',
    label: 'Имя',
    item: { placeholder: 'Input', type: 'input' },
    field: { name: 'input' },
  },
  failed: {
    meta: { error: 'input is a required field', touched: true },
    name: 'input',
    label: 'Имя',
    item: { placeholder: 'Input', type: 'input' },
    field: { name: 'input' },
  },
};
