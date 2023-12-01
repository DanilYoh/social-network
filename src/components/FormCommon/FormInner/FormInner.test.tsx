import { render } from '@testing-library/react';
import { vi } from 'vitest';

import { formInnerMocks } from '@/mocks/form-inner.mocks';
import { FieldPartialProps } from '@/types/form-mocks.types';
import { FormInner } from '@components/FormCommon/FormInner';
import { IFromInnerMock } from '@interfaces/form-mocks.interfaces';

const { mockedProps } = vi.hoisted(() => ({
  mockedProps: vi.fn<unknown[], Record<string, FieldPartialProps>>(),
}));

vi.mock('formik', () => ({
  Field: ({
    children,
    name,
  }: {
    children: (props: FieldPartialProps) => JSX.Element;
    name: string;
  }) => children(mockedProps()[name]),
}));

const setup = ({ handleSubmit, items, buttonText, props }: IFromInnerMock) => {
  mockedProps.mockReturnValue(props);
  const utils = render(
    <FormInner
      isLoading={false}
      buttonText={buttonText}
      items={items}
      handleSubmit={handleSubmit}
    />
  );
  const errorFields = utils.queryAllByText(/is a required field$/i);
  return { ...utils, errorFields };
};
describe('FormInner', () => {
  it('must be all validated', () => {
    const mock = formInnerMocks.first;
    const { errorFields } = setup(mock);
    expect(errorFields).toHaveLength(0);
  });
  it('must be all invalid', () => {
    const mock = formInnerMocks.second;
    const { errorFields } = setup(mock);
    expect(errorFields).toHaveLength(2);
  });
  it('must be one invalid', () => {
    const mock = formInnerMocks.third;
    const { errorFields } = setup(mock);
    expect(errorFields).toHaveLength(1);
  });
});
