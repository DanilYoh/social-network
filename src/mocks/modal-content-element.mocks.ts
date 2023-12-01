import { TModalMeta } from '@interfaces/modal-meta.interfaces';

type TMocks = 'invalid' | 'valid';

export const modalContentElementMocks: Record<TMocks, TModalMeta> = {
  valid: {
    type: 'ticket',
    action: 'create',
    title: 'Заголовок',
  },
  invalid: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    type: 'invalid-type',
    action: 'create',
    title: 'Заголовок',
  },
};
