import { FieldInputProps } from 'formik/dist/types';
import { render } from '@testing-library/react';

import { InputField } from '@interfaces/form-input.interfaces';
import { inputElementMocks } from '@/mocks/input-element.mocks';
import { InputElement } from '@components/FormCommon/InputElement';
import { IInputElementMock } from '@interfaces/form-mocks.interfaces';
import { mockConsoleError } from '@utils/mock-console-error.utils';

const setup = ({ item, field }: IInputElementMock) => {
  const utils = render(
    <InputElement
      isLoading={false}
      item={item as InputField}
      field={field as FieldInputProps<string>}
    />
  );
  const input = utils.queryByRole('textbox') as HTMLInputElement | null;
  const select = utils.queryByRole('combobox') as HTMLSelectElement | null;
  return { ...utils, select, input };
};
describe('InputElement', () => {
  it('component must be input', () => {
    const mock = inputElementMocks.input;
    const { input, select } = setup(mock);
    expect(input).not.toBeNull();
    expect(select).toBeNull();
  });
  it('component must be select', () => {
    const mock = inputElementMocks.select;
    const { input, select } = setup(mock);
    expect(select).not.toBeNull();
    expect(input).toBeNull();
  });
  it('must throw an error', () => {
    mockConsoleError(() => {
      const mock = inputElementMocks.invalid;
      expect(() => setup(mock)).toThrowError('There is no current input type');
    });
  });
});
