import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import { InputDate } from '@common/SearchForm';

const mockedCb = vi.fn();

describe('InputDate test', () => {
  it('Check elements', async () => {
    const user = userEvent.setup();
    render(
      <InputDate
        id="testID"
        value={undefined}
        setValue={mockedCb}
        fieldHasError
        label="testLabel"
      />
    );

    expect(screen.getByTestId('testID')).toBeInTheDocument();
    expect(screen.getByTestId('testID')).toHaveAttribute('id', 'testID');
    await user.click(screen.getByTestId('testID'));
    await act(async () => {
      expect(await screen.findByTestId('testCalendarID')).toBeInTheDocument();
    });
  });
});
