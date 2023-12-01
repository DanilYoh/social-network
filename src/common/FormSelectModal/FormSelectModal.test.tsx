import { render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import FormSelectModal from './FormSelectModal';

const name = 'Name';
const label = 'Label';
const data = ['option1', 'option2'];

vi.mock('@chakra-ui/react', () => ({
  FormControl: ({ children }: React.PropsWithChildren) => (
    <div>FormControl{children}</div>
  ),
  FormLabel: () => (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label htmlFor={label}>FormLabel</label>
  ),
}));

vi.mock('formik', () => ({
  Field: ({ children }: React.PropsWithChildren) => (
    <select>Field{children}</select>
  ),
}));

describe('render', () => {
  it('render FormFieldV2', () => {
    const { getByText, getAllByRole } = render(
      <FormSelectModal data={data} label={label} name={name} />
    );
    expect(getByText('FormControl')).toBeDefined();
    expect(getByText('FormLabel')).toBeDefined();
    expect(getAllByRole('option')).toHaveLength(data.length + 1);
  });
  it('select option', async () => {
    const user = userEvent.setup();
    const { getByRole, getByText } = render(
      <FormSelectModal data={data} label={label} name={name} />
    );
    await user.selectOptions(getByRole('combobox'), 'option1');
    await waitFor(() => {
      expect((getByText('option1') as HTMLOptionElement).selected).toBeTruthy();
      expect((getByText('option2') as HTMLOptionElement).selected).toBeFalsy();
    });
  });
});
