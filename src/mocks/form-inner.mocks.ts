import { vi } from 'vitest';

import { FieldPartialProps } from '@/types/form-mocks.types';
import { IFromInnerMock } from '@interfaces/form-mocks.interfaces';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TProps ключ-название поля мока и через  'prop1'|'prop2'|'prop3'|...'propN'
// чтобы typescript подсказывал какие и где поля можно добавлять

type Fields = 'lastName' | 'cityFrom';

type TProps = {
  first: Fields;
  second: Fields;
  third: Fields;
};

type FormInnerRecord<P extends Record<string, string>> = {
  [K in keyof P]: IFromInnerMock<P[K]>;
};

interface Mocks<K extends string = string> {
  valid: { [Key in K]: FieldPartialProps<Key> };
  invalid: { [Key in K]: FieldPartialProps<Key> };
  items: FieldsObject<K>;
}

const mockFields: Mocks<Fields> = {
  valid: {
    cityFrom: {
      field: {
        name: 'cityFrom',
      },
      meta: { error: undefined, touched: false },
    },
    lastName: {
      field: {
        name: 'lastName',
      },
      meta: { error: undefined, touched: false },
    },
  },
  invalid: {
    cityFrom: {
      field: {
        name: 'cityFrom',
      },
      meta: { error: `cityFrom is a required field`, touched: true },
    },
    lastName: {
      field: {
        name: 'lastName',
      },
      meta: { error: `lastName is a required field`, touched: true },
    },
  },
  items: {
    cityFrom: {
      version: 'custom',
      type: 'select',
      placeholder: 'Ноябрьск',
      initialValue: 'someCity',
      label: 'Город',
      options: [{ label: 'Ноябрьск', value: 'someCity' }],
    },
    lastName: {
      type: 'input',
      placeholder: 'Леонова',
      label: 'Фамилия',
      initialValue: 'Леонова',
    },
  },
};
export const formInnerMocks: FormInnerRecord<TProps> = {
  first: {
    props: mockFields.valid,
    buttonText: 'Save',
    items: mockFields.items,
    handleSubmit: vi.fn((e) => e && e.preventDefault()),
  },
  second: {
    props: mockFields.invalid,
    buttonText: 'Save',
    items: mockFields.items,
    handleSubmit: vi.fn((e) => e && e.preventDefault()),
  },
  third: {
    props: {
      cityFrom: mockFields.valid.cityFrom,
      lastName: mockFields.invalid.lastName,
    },
    items: mockFields.items,
    buttonText: 'Save',
    handleSubmit: vi.fn((e) => e && e.preventDefault()),
  },
};
