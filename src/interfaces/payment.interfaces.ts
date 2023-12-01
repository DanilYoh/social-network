export interface IPaymentValues {
  first: string;
  last: string;
  number: string;
  date: string;
  csv: string;
}

export interface IPaymentData {
  data: IPaymentValues;
  isValid: boolean;
}

export interface CardInputProps {
  label: string;
  error?: string;
  touch?: boolean;
  focus?: boolean | null;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  maxLength?: number;
  handleChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}
