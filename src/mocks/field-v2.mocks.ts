import { IFieldV2Mock } from '@interfaces/form-mocks.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TProps ключ-название поля мока и через  'prop1'|'prop2'|'prop3'|...'propN'
// чтобы typescript подсказывал какие и где поля можно добавлять

type TProps = {
  success: 'input';
  fail: 'input';
};

type IFieldV2Record<P extends Record<string, string>> = {
  [K in keyof P]: IFieldV2Mock<P[K]>;
};

export const fieldV2Mocks: IFieldV2Record<TProps> = {
  success: {
    props: {
      field: {
        name: 'input',
      },
      meta: { error: undefined, touched: false },
    },
    name: 'input',
    item: {
      placeholder: 'Input',
      type: 'input',
      label: 'label',
    },
  },
  fail: {
    props: {
      field: {
        name: 'input',
      },
      meta: { error: 'input is a required field', touched: true },
    },
    name: 'input',
    item: {
      placeholder: 'Input',
      type: 'input',
      label: 'label',
    },
  },
};
