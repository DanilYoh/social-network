import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldInputProps } from 'formik/dist/types';

import { ISelectBaseMock } from '@interfaces/form-mocks.interfaces';
import { SelectBase } from '@components/FormCommon/SelectBase';
import { SelectField } from '@interfaces/form-select.interfaces';
import { selectBaseMocks } from '@/mocks/select-base.mocks';

const setup = ({ item, options, field, isLoading }: ISelectBaseMock) => {
  const utils = render(
    <SelectBase
      item={item as SelectField}
      field={field as FieldInputProps<string>}
      options={options}
      isLoading={isLoading}
    />
  );
  const select = utils.getByRole('combobox') as HTMLSelectElement;
  return { ...utils, select };
};
describe('SelectV2', () => {
  it('should be empty', async () => {
    const user = userEvent.setup();
    const mock = selectBaseMocks.empty;
    const { select } = setup(mock);
    await user.selectOptions(select, select.options[0]);
    expect(select.value).toBe('');
  });
  it('should have elements', async () => {
    const user = userEvent.setup();
    const mock = selectBaseMocks.filled;
    const { select } = setup(mock);
    const { options } = select;
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
    await user.selectOptions(select, options[1]);
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeTruthy();
    expect(options[2].selected).toBeFalsy();
    await user.selectOptions(select, options[2]);
    expect(options[0].selected).toBeFalsy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeTruthy();
    await user.selectOptions(select, options[0]);
    expect(options[0].selected).toBeTruthy();
    expect(options[1].selected).toBeFalsy();
    expect(options[2].selected).toBeFalsy();
  });
  it('should be available to change option', () => {
    const mock = selectBaseMocks.loaded;
    const { select } = setup(mock);
    expect(select.disabled).toBeFalsy();
  });
  it('should not be available to change option', () => {
    const mock = selectBaseMocks.notLoaded;
    const { select } = setup(mock);
    expect(select.disabled).toBeTruthy();
  });
});
