export interface IUser {
  '@type': string;
  answerQuestion: string;
  email: string;
  id: number;
  password: string;
  roles: {
    id: number;
    name: string;
  }[];
  securityQuestion: string;
  birthDate: string;
  firstName: string;
  lastName: string;
  passport: {
    gender: string;
    middleName: string;
    passportIssuingCountry: string;
    passportIssuingDate: string;
    serialNumberPassport: string;
  };
  phoneNumber: string;
}
