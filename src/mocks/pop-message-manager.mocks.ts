import { IPopMessageManager } from '@interfaces/pop-message-manager.interfaces'; // Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'empty' | 'success' | 'error';

export const popMessageManagerMocks: Record<TMocks, IPopMessageManager> = {
  empty: {
    meta: null,
  },
  success: {
    meta: {
      message: 'Success',
      status: 'success',
    },
  },
  error: {
    meta: {
      message: 'Error',
      status: 'error',
    },
  },
};
