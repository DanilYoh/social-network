import { vi } from 'vitest';

import { IFormOuterMock } from '@interfaces/form-mocks.interfaces';
import { FieldsObject } from '@interfaces/form-unions.interfaces';

// Для того, чтобы создавать новые моки, нужно будет добавлять в TProps ключ-название поля мока и через  'prop1'|'prop2'|'prop3'|...'propN'
// чтобы typescript подсказывал какие и где поля можно добавлять

type FormOuterRecord<P extends Record<string, string>> = {
  [K in keyof P]: IFormOuterMock<P[K]>;
};

type TProps = {
  first: 'passengerId' | 'from';
  second: 'from' | 'to' | 'seatNumber' | 'flightSeatId';
  third: 'passengerId';
};

const mocks: { [K in keyof TProps]: FieldsObject<TProps[K]> } = {
  first: {
    passengerId: {
      type: 'input',
      label: 'Идентификатор пассажира',
      placeholder: '123456',
    },
    from: {
      version: 'custom',
      type: 'select',
      label: 'Город отбытия',
      options: [
        { label: 'Value 1', value: 'value1' },
        { label: 'Value 2', value: 'value2' },
      ],
      placeholder: 'Выберите город',
    },
  },
  second: {
    from: {
      version: 'custom',
      type: 'select',
      label: 'Город отбытия',
      options: [
        { label: 'Value 1', value: 'value1' },
        { label: 'Value 2', value: 'value2' },
      ],
      placeholder: 'Выберите город',
    },
    to: {
      version: 'custom',
      type: 'select',
      label: 'Город прибытия',
      options: [
        { label: 'Value 1', value: 'value1' },
        { label: 'Value 2', value: 'value2' },
      ],
      placeholder: 'Выберите город',
    },
    seatNumber: {
      type: 'input',
      label: 'Номер места на рейсе',
      placeholder: '1B',
    },
    flightSeatId: {
      type: 'input',
      label: 'Идентификатор места на рейсе',
      placeholder: '15',
    },
  },
  third: {
    passengerId: {
      type: 'input',
      label: 'Идентификатор пассажира',
      placeholder: '123456',
    },
  },
};
export const formOuterMocks: FormOuterRecord<TProps> = {
  first: {
    items: mocks.first,
    buttonText: 'Save',
    onSubmit: vi.fn(() => Promise.resolve()),
  },
  second: {
    items: mocks.second,
    buttonText: 'Save',
    onSubmit: vi.fn(() => Promise.resolve()),
  },
  third: {
    items: mocks.third,
    buttonText: 'Save',
    onSubmit: vi.fn(() => Promise.resolve()),
  },
};
