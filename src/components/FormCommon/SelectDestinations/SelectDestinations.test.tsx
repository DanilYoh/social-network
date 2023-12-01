import { FieldInputProps } from 'formik/dist/types';
import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { ISelectDestinations2Mock } from '@interfaces/form-mocks.interfaces';
import { VersionSelect } from '@interfaces/form-select.interfaces';
import { SelectDestinations } from '@components/FormCommon/SelectDestinations';
import { selectDestinationsMocks } from '@/mocks/select-destinations.mocks';
import { IUseOptions } from '@interfaces/use-select-options.interfaces';

const { getOptions } = vi.hoisted(() => ({
  getOptions: vi.fn(),
}));

vi.mock('@hooks/useTicketDestinations/useTicketDestinations', () => ({
  useTicketDestinations: getOptions as () => IUseOptions,
}));

const setup = ({ item, field, useOptions }: ISelectDestinations2Mock) => {
  getOptions.mockReturnValue(useOptions);
  const utils = render(
    <SelectDestinations
      isLoading={false}
      item={item as VersionSelect}
      field={field as FieldInputProps<string>}
    />
  );
  const select = utils.getByRole('combobox') as HTMLSelectElement;
  return { ...utils, select };
};
describe('SelectDestinations', () => {
  it('should be loaded', () => {
    const mock = selectDestinationsMocks.loaded;
    const { select } = setup(mock);
    expect(select.options).toHaveLength(4);
    expect(select.disabled).toBeFalsy();
  });
  it('should loading', () => {
    const mock = selectDestinationsMocks.loading;
    const { select } = setup(mock);
    expect(select.options).toHaveLength(1);
    expect(select.disabled).toBeTruthy();
  });
});
