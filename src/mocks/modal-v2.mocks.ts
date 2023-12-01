import { vi } from 'vitest';

import { IModalV2Mock } from '@interfaces/modal.mocks.interfaces';

type TMocks = 'opened';

export const modalV2Mocks: Record<TMocks, IModalV2Mock> = {
  opened: {
    isOpen: true,
    title: 'Модалка',
    onClose: vi.fn(),
  },
};
