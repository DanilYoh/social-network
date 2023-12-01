import { FieldInputProps } from 'formik/dist/types';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { InputField } from '@interfaces/form-input.interfaces';
import { inputV2Mocks } from '@/mocks/input-v2.mocks';
import { InputV2 } from '@components/FormCommon/InputV2';
import { IInputV2Mock } from '@interfaces/form-mocks.interfaces';

const setup = ({ item, field }: IInputV2Mock) => {
  const utils = render(
    <InputV2
      isLoading={false}
      item={item as InputField}
      field={field as FieldInputProps<string>}
    />
  );
  const input = utils.getByRole('textbox') as HTMLInputElement;
  return { ...utils, input };
};
describe('InputV2', () => {
  it('should work fine', async () => {
    const user = userEvent.setup();
    const mock = inputV2Mocks.first;
    const { input } = setup(mock);
    await user.type(input, '123');
    expect(input.value).toBe('123');
  });
});
