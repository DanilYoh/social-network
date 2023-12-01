import { render } from '@testing-library/react';
import { Field, Form, Formik } from 'formik';
import userEvent from '@testing-library/user-event';
import { vitest } from 'vitest';
import { FieldInputProps } from 'formik/dist/types';

import { AdminDatepicker } from 'src/common/AdminDatepicker';

describe('AdminDatepicker test', () => {
  const userUtils = userEvent.setup();
  const changeFuncMock = vitest.fn().mockImplementation(() => undefined);

  test('Main', async () => {
    const datepickerRender = render(
      <Formik initialValues={[]} onSubmit={changeFuncMock}>
        <Form>
          <Field name="datepicker">
            {({ field }: { field: FieldInputProps<string> }) => (
              <AdminDatepicker {...field} />
            )}
          </Field>
          <button type="submit" data-testid="submit-btn">
            send
          </button>
        </Form>
      </Formik>
    );

    const input = datepickerRender.getByTestId('datepicker-field');
    expect(input).toBeInTheDocument();
    await userUtils.click(input);

    const day = datepickerRender.getAllByTestId('datepicker-day')[0];
    expect(day).toBeVisible();
    await userUtils.click(datepickerRender.getByTestId('submit-btn'));
    expect(changeFuncMock).toHaveBeenCalled();
  });
});
