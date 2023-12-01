/* eslint-disable import/export */

import { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
});

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed

    wrapper: ({ children }) => children,

    ...options,
  });

export * from '@testing-library/react';

// override render export

export { customRender as render };
