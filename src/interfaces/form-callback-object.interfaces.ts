import { FormikHelpers, FormikProps } from 'formik';

import { useAppDispatch } from '@/hooks';
import { ActionResponse } from '@/types/action-response.types';

export type FormikSubmit<
  T extends string,
  R extends Record<T, string> = Record<T, string>
> = (values: R, helpers: FormikHelpers<R>) => Promise<void>;

export type FormikCallback<T extends string> = (
  obj: FormikProps<Record<T, string>>
) => void;

export type FormikSubmitCB<
  T extends string,
  A extends Parameters<FormikSubmit<T>> = Parameters<FormikSubmit<T>>
> = (
  dispatch: ReturnType<typeof useAppDispatch>,
  data: A[0],
  helpers: A[1]
) => Promise<ActionResponse<any, any>>;

export interface IFormCallbackObject<T extends string> {
  callback: FormikCallback<T> | null;
  onSubmit: FormikSubmitCB<T>;
}
