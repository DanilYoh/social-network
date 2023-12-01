import { FormikErrors, FormikHandlers, FormikTouched } from 'formik';

export interface IFormik {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  day: string;
  month: string;
  year: string;
  passportIssuingCountry: string;
  phone: string;
  phoneCode: string;
  question: string;
  questionAnswer: string;
  phoneGroup: string;
}

export interface IPasswordRules {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  symbol: boolean;
}

export interface IProps {
  values: IFormik;
  errors: FormikErrors<IFormik>;
  touched: FormikTouched<IFormik>;
  handleBlur?: FormikHandlers['handleBlur'];
}

export interface ICard {
  title: string;
  header: string;
  text: string;
  image: string;
}

export interface ITicketInitValues {
  arrivalDateTime: string;
  firstName: string;
  flightId: string;
  flightSeatId: string;
  from: string;
  lastName: string;
  passengerId: string;
  seatNumber: string;
  ticketNumber: string;
  to: string;
  departureDateTime: string;
  code: string;
}

export interface ITicketEditValues extends ITicketInitValues {
  id: string;
}

export type TTicketInitValues = keyof ITicketInitValues;
export type TTicketEditValues = keyof ITicketEditValues;
