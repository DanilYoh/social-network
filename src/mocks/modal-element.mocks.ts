import { TModalMeta } from '@interfaces/modal-meta.interfaces';

type TMocks = 'invalid' | 'valid';

export const modalElementMocks: Record<TMocks, TModalMeta | null> = {
  valid: { type: 'ticket', action: 'create', title: 'Заголовок' },
  invalid: null,
};
