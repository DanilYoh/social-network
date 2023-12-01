import { render, screen } from '@testing-library/react';
import { vitest } from 'vitest';
import userEvent from '@testing-library/user-event';

import AdminModalForm from '@common/AdminModalForm/AdminModalForm';

describe('AdminModalForm test', () => {
  const changeMock = vitest.fn().mockImplementation(() => undefined);
  const closeMock = vitest.fn().mockImplementation(() => undefined);
  const submitMock = vitest.fn().mockImplementation(() => undefined);

  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <div>
        <AdminModalForm
          header="Test modal"
          inputs={{
            input: {
              type: 'text',
              label: 'Text input',
              value: '',
            },
          }}
          isOpen
          onChange={changeMock}
          onClose={closeMock}
          submitHandler={submitMock}
        />
      </div>
    );
    expect(screen.getByTestId('admin-modal')).toBeTruthy();
  });

  test('Test input', async () => {
    expect(screen.getByLabelText('Text input')).toBeInTheDocument();
    await user.type(screen.getByLabelText('Text input'), 'some text');
    expect(changeMock).toHaveBeenCalledTimes(10);
  });
  test('Test submit', async () => {
    expect(screen.getByTestId('admin-modal-submit')).toBeInTheDocument();
    await user.click(screen.getByTestId('admin-modal-submit'));
    expect(submitMock).toHaveBeenCalled();
  });
  test('Test cancel', async () => {
    expect(screen.getByTestId('admin-modal-cancel')).toBeInTheDocument();
    await user.click(screen.getByTestId('admin-modal-cancel'));
    expect(closeMock).toHaveBeenCalled();
  });
});
