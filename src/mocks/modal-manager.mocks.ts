import { vi } from 'vitest';

import { IModalManagerMocks } from '@interfaces/modal.mocks.interfaces';

type TProps = 'closed' | 'opened';

export const modalManagerMocks: Record<TProps, IModalManagerMocks> = {
  closed: {
    isOpen: false,
    meta: null,
    setClose: vi.fn(),
  },
  opened: {
    isOpen: true,
    meta: { type: 'ticket', action: 'create', title: 'Заголовок Модалки' },
    setClose: vi.fn(),
  },
};
