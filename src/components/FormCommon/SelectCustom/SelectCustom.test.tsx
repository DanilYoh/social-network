import { FieldInputProps } from 'formik/dist/types';
import { render } from '@testing-library/react';

import { ISelectCustom2Mock } from '@interfaces/form-mocks.interfaces';
import { CustomSelect } from '@interfaces/form-select.interfaces';
import { SelectCustom } from '@components/FormCommon/SelectCustom';
import { selectCustomMocks } from '@/mocks/select-custom.mocks';

const setup = ({ item, field }: ISelectCustom2Mock) => {
  const utils = render(
    <SelectCustom
      isLoading={false}
      item={item as CustomSelect}
      field={field as FieldInputProps<string>}
    />
  );
  const select = utils.getByRole('combobox') as HTMLSelectElement;
  return { ...utils, select };
};
describe('SelectCustom', () => {
  it('should be filled', () => {
    const mock = selectCustomMocks.filled;
    const { select } = setup(mock);
    expect(select.options).toHaveLength(4);
  });
  it('should be empty', () => {
    const mock = selectCustomMocks.empty;
    const { select } = setup(mock);
    expect(select.options).toHaveLength(1);
  });
});
