import { format } from 'date-fns';

export const dateToSubmit = (dateSTR: string): string => {
  const date = new Date(dateSTR);
  return format(date, `yyyy-MM-dd'T'hh:mm:ss.SSSSSS`);
};
export const dateToField = (dateSTR: string) => {
  const date = new Date(dateSTR);
  return format(date, `yyyy-MM-dd'T'hh:mm`);
};
