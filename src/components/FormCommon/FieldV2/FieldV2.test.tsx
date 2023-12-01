import { render } from '@testing-library/react';
import { vi } from 'vitest';
import { FieldProps } from 'formik/dist/Field';

import { FieldV2 } from '@components/FormCommon/FieldV2';
import { fieldV2Mocks } from '@/mocks/field-v2.mocks';
import { IFieldV2Mock } from '@interfaces/form-mocks.interfaces';

const { mockedProps } = vi.hoisted(() => ({ mockedProps: vi.fn() }));

vi.mock('formik', () => ({
  Field: ({
    children,
  }: {
    children: (props: FieldProps<string>) => JSX.Element;
  }) => children(mockedProps() as FieldProps<string>),
}));

const setup = ({ name, item, props }: IFieldV2Mock) => {
  mockedProps.mockReturnValue(props);
  const utils = render(<FieldV2 isLoading={false} name={name} item={item} />);
  const error = utils.queryByText(`${name} is a required field`);
  return { ...utils, error };
};
describe('FieldV2', () => {
  it('field is succeed', () => {
    const mock = fieldV2Mocks.success;
    const { error } = setup(mock);
    expect(error).toBeNull();
  });
  it('field is failed', () => {
    const mock = fieldV2Mocks.fail;
    const { error } = setup(mock);
    expect(error).not.toBeNull();
  });
});
