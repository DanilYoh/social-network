import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { formOuterMocks } from '@/mocks/form-outer.mocks';
import { formItemsHelper } from '@utils/form-items-helper.utils';
import { FormOuter } from '@components/FormCommon/FormOuter';
import { IFormOuterMock } from '@interfaces/form-mocks.interfaces';
import { flushPromises } from '@utils/test.utils';

const setup = async ({ onSubmit, items, buttonText }: IFormOuterMock) => {
  const user = userEvent.setup();
  const properties = formItemsHelper({
    items,
  });
  const utils = await act(() =>
    render(
      <FormOuter
        items={items}
        callback={null}
        onSubmit={onSubmit}
        buttonText={buttonText}
        {...properties}
      />
    )
  );
  const errorFieldsQ = () => utils.queryAllByText(/please complete field$/i);
  const inputs = utils.queryAllByRole('textbox') as HTMLInputElement[];
  const selects = utils.queryAllByRole('combobox') as HTMLSelectElement[];
  const button = utils.getByRole('button') as HTMLButtonElement;
  const click = async () => {
    await user.click(button);
    return act(() => flushPromises());
  };

  const changeAllInputs = async (isMakeEmpty: boolean) => {
    for (const input of inputs) {
      const action = isMakeEmpty
        ? user.clear(input)
        : user.type(input, 'Value');
      // eslint-disable-next-line no-await-in-loop
      await action;
    }
  };
  const changeAllSelects = async (isMakeEmpty: boolean) => {
    for (const select of selects) {
      const target = isMakeEmpty ? select.options[0] : select.options[1];
      // eslint-disable-next-line no-await-in-loop
      await user.selectOptions(select, target);
    }
  };
  const changeAll = async (isMakeEmpty: boolean) => {
    await changeAllInputs(isMakeEmpty);
    await changeAllSelects(isMakeEmpty);
  };
  return {
    ...utils,
    errorFieldsQ,
    button,
    inputs,
    selects,
    changeAll,
    changeAllInputs,
    changeAllSelects,
    click,
  };
};

describe('FormOuter', () => {
  it('Must detect 2 different fields', async () => {
    const mock = formOuterMocks.first;
    const { selects, inputs } = await setup(mock);
    expect(inputs).toHaveLength(1);
    expect(selects).toHaveLength(1);
  });

  it('Must detect 4 different fields', async () => {
    const mock = formOuterMocks.second;
    const { selects, inputs } = await setup(mock);
    expect(inputs).toHaveLength(2);
    expect(selects).toHaveLength(2);
  });

  it('Must show invalid fields', async () => {
    const mock = formOuterMocks.second;
    const { click, errorFieldsQ, changeAllInputs, changeAllSelects } =
      await setup(mock);
    await click();
    expect(errorFieldsQ()).toHaveLength(4);

    await changeAllSelects(false);
    await click();
    expect(errorFieldsQ()).toHaveLength(2);

    await changeAllInputs(false);
    await click();
    expect(errorFieldsQ()).toHaveLength(0);

    await changeAllInputs(true);
    await click();
    expect(errorFieldsQ()).toHaveLength(2);
  });

  it('Must call submit function when all fields is valid', async () => {
    const mock = formOuterMocks.first;
    const { click, changeAllInputs, changeAllSelects, changeAll } = await setup(
      mock
    );
    await click();
    expect(mock.onSubmit).toBeCalledTimes(0);

    await changeAllSelects(false);
    await click();
    expect(mock.onSubmit).toBeCalledTimes(0);

    await changeAllInputs(false);
    await click();
    expect(mock.onSubmit).toBeCalledTimes(1);

    await changeAll(true);
    await click();
    expect(mock.onSubmit).toBeCalledTimes(1);

    await changeAll(false);
    await click();
    expect(mock.onSubmit).toBeCalledTimes(2);
  });
});
