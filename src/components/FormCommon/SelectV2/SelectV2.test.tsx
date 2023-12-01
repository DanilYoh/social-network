import { FieldInputProps } from 'formik/dist/types';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { selectV2Mocks } from '@/mocks/select-v2.mocks';
import { SelectV2 } from '@components/FormCommon/SelectV2';
import { ISelectV2Mock } from '@interfaces/form-mocks.interfaces';
import { SelectField } from '@interfaces/form-select.interfaces';

vi.mock('@components/FormCommon/SelectCustom', () => ({
  SelectCustom: () => <div>SelectCustom</div>,
}));
vi.mock('@components/FormCommon/SelectVersions', () => ({
  SelectVersions: () => <div>SelectVersions</div>,
}));

const setup = ({ item, field }: ISelectV2Mock) => {
  const utils = render(
    <SelectV2
      isLoading={false}
      item={item as SelectField}
      field={field as FieldInputProps<string>}
    />
  );
  const getSelect = (text: string) => utils.queryByText(text);
  return { ...utils, getSelect };
};
describe('SelectV2', () => {
  it('should be custom', () => {
    const mock = selectV2Mocks.custom;
    const { getSelect } = setup(mock);
    expect(getSelect('SelectCustom')).not.toBeNull();
  });
  it('should be versioned', () => {
    const mock = selectV2Mocks.versioned;
    const { getSelect } = setup(mock);
    expect(getSelect('SelectVersions')).not.toBeNull();
  });
});
