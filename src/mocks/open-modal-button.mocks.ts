import { vi } from 'vitest';

import { IOpenModalButtonMock } from '@interfaces/modal.mocks.interfaces';

type TMocks = 'clickable' | 'disabled';

export const openModalButtonMocks: Record<TMocks, IOpenModalButtonMock> = {
  clickable: {
    buttonText: 'Click',
    onClick: vi.fn(),
    props: {},
  },
  disabled: {
    buttonText: 'Click',
    onClick: vi.fn(),
    props: {
      isDisabled: true,
    },
  },
};
