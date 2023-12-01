export interface ITimeZonesData {
  cityName: string;
  countryName: string;
  gmt: string;
  gmtWinter: string;
}

export interface IDataForm {
  cityName?: string;
  countryName?: string;
  gmt?: string;
  gmtWinter?: string;
}

export type TCreateOnSubmitHandler = (
  data: IDataForm,
  onSuccess: () => unknown,
  onClose: () => void
) => unknown;

export interface IModalFormProps {
  onSubmit: TCreateOnSubmitHandler;
  error: Error | null;
  loading: boolean;
  onClose: () => void;
}
