import { render } from '@testing-library/react';
import { FieldInputProps, FieldMetaProps } from 'formik/dist/types';

import { formControlV2Mocks } from '@/mocks/form-control-v2.mocks';
import { FormControlV2 } from '@components/FormCommon/FormControlV2/index';
import { InputElement } from '@components/FormCommon/InputElement';
import { IFormControlV2Mock } from '@interfaces/form-mocks.interfaces';
import { FieldUnions } from '@interfaces/form-unions.interfaces';

const setup = ({ label, name, meta, field, item }: IFormControlV2Mock) => {
  const utils = render(
    <FormControlV2
      label={label}
      name={name}
      meta={meta as FieldMetaProps<string>}
    >
      <InputElement
        isLoading={false}
        item={item as FieldUnions}
        field={field as FieldInputProps<string>}
      />
    </FormControlV2>
  );
  const error = utils.queryByText(`${name} is a required field`);
  const labelEl = utils.getByLabelText(name) as HTMLLabelElement;
  return { ...utils, error, labelEl };
};
describe('FormControlV2', () => {
  it('label must have specific value', () => {
    const mock = formControlV2Mocks.success;
    const { labelEl } = setup(mock);
    expect(labelEl.textContent).toBe(mock.label);
  });

  it('succeed field', () => {
    const mock = formControlV2Mocks.success;
    const { error } = setup(mock);
    expect(error).toBeNull();
  });
  it('failed field', () => {
    const mock = formControlV2Mocks.failed;
    const { error } = setup(mock);
    expect(error).not.toBeNull();
  });
});
