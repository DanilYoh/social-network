import { FieldInputProps } from 'formik/dist/types';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { ISelectVersions2Mock } from '@interfaces/form-mocks.interfaces';
import { SelectVersions } from '@components/FormCommon/SelectVersions';
import { VersionSelect } from '@interfaces/form-select.interfaces';
import { selectVersionsMocks } from '@/mocks/select-versions.mocks';
import { mockConsoleError } from '@utils/mock-console-error.utils';

vi.mock('@components/FormCommon/SelectDestinations', () => ({
  SelectDestinations: () => <div>SelectDestinations</div>,
}));
const setup = ({ item, field }: ISelectVersions2Mock) => {
  const utils = render(
    <SelectVersions
      item={item as VersionSelect}
      field={field as FieldInputProps<string>}
      isLoading={false}
    />
  );
  const getSelect = (text: string) => utils.queryByText(text);
  return { ...utils, getSelect };
};

describe('SelectVersions', () => {
  it('should render destination', () => {
    const mock = selectVersionsMocks.destinations;
    const { getSelect } = setup(mock);
    expect(getSelect('SelectDestinations')).not.toBeNull();
  });
  it('should throw error on invalid version', () => {
    mockConsoleError(() => {
      const mock = selectVersionsMocks.invalid;
      expect(() => setup(mock)).toThrowError('Select version is not defined');
    });
  });
});
