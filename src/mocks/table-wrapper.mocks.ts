import { TableWrapperMocks } from '@interfaces/table-wrapper-mocks.interfaces'; // Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей

// Для того, чтобы создавать новые моки, нужно будет добавлять в TMocks строки - названия моковых полей
// чтобы typescript подсказывал какие и где поля можно добавлять

type TMocks = 'loading' | 'rejected' | 'resolved' | 'invalid';

export const tableWrapperMocks: Record<TMocks, TableWrapperMocks> = {
  resolved: {
    status: 'resolved',
    error: 'Something went wrong',
  },
  rejected: {
    status: 'rejected',
    error: 'Something went wrong',
  },
  loading: {
    status: 'loading',
    error: 'Something went wrong',
  },
  invalid: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    status: 'invalid',
    error: 'Something went wrong',
  },
};
