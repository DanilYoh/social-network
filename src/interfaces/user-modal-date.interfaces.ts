export interface IUsersData {
  email: string;
  confirmPassword: string;
  birthDate: string;
  fio: string;
  serialNumberPassport: string;
  passportIssuingCountry: string;
  phoneNumber: string;
  passportIssuingDate: string;
  gender: string;
}

export type CreateOnSubmitHandler = (
  data: IUsersData,
  onSuccess?: () => unknown
) => unknown;

export interface IEditUsersData {
  email?: string;
  confirmPassword?: string;
  birthDate?: string;
  lastName?: string;
  firstName?: string;
  middleName?: string;
  serialNumberPassport?: string;
  passportIssuingCountry?: string;
  phoneNumber?: string;
  passportIssuingDate?: string;
  gender?: string;
}

export type EditOnSubmitHandler = (
  data: IEditUsersData,
  onSuccess?: () => unknown
) => unknown;
