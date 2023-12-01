/* eslint-disable no-console */
import { vi } from 'vitest';

export const mockConsoleError = <T extends () => void>(cb: T) => {
  const { error } = console; // save I/O
  console.error = vi.fn(); // mock console.error to avoid unnecessary error message when expecting error to throw
  cb();
  console.error = error; // restore I/O
};
