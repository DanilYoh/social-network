import { Genders } from '@enums/genders';

export interface IPassenger {
  answerQuestion: string;
  birthDate: string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  passport: {
    gender: Genders;
    middleName: string;
    passportIssuingCountry: string;
    passportIssuingDate: string;
    serialNumberPassport: string;
  };
  password: string;
  phoneNumber: string;
  roles: [
    {
      id: number;
      name: string;
    }
  ];
  securityQuestion: string;
}
