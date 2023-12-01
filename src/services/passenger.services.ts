import { adminInstance } from '@/instances/admin-instance';
import { IUser } from '@/interfaces/users.interfaces';
import Endpoints from '@enums/endpoints';
import { INewUserData } from '@interfaces/new-user.interfaces';
import { clientInstance } from '@/instances/client-instance';
import {
  IUsersData,
  IEditUsersData,
} from '@/interfaces/user-modal-date.interfaces';
import { PAGE_SIZE } from '@enums/constants';

export const PassengerServices = {
  getPassengers: (page = 0) =>
    adminInstance
      .get<{ content: IUser[] }>(Endpoints.API_PASSENGERS, {
        params: { page, size: PAGE_SIZE },
      })
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),

  deletePassenger: (id: number) =>
    adminInstance
      .delete<string>(`${Endpoints.API_PASSENGERS}/${id}`)
      .then((response) => response.data)
      .catch(() => {
        throw Error();
      }),

  postNewPassenger: async (data: INewUserData) => {
    const passport = data.gender
      ? {
          gender: data.gender,
          passportIssuingCountry: data.passportIssuingCountry,
          passportIssuingDate: data.passportIssuingDate,
          serialNumberPassport: data.serialNumberPassport,
        }
      : null;
    try {
      const res = await clientInstance.post(Endpoints.API_PASSENGERS, {
        '@type': 'Passenger',
        answerQuestion: data.questionAnswer || 'null',
        email: data.email,
        password: data.confirmPassword,
        securityQuestion: data.question || 'null',
        birthDate: data.birthDate,
        firstName: String(data.fio).split(' ')[0],
        lastName: String(data.fio).split(' ')[1],
        passport,
        phoneNumber: data.phoneNumber,
      });
      return res.data as IUsersData;
    } catch (e) {
      return false;
    }
  },

  editPassenger: async (data: INewUserData, id: number) => {
    const passport = data.gender
      ? {
          gender: data.gender,
          middleName: data.middleName,
          passportIssuingCountry: data.passportIssuingCountry,
          passportIssuingDate: data.passportIssuingDate,
          serialNumberPassport: data.serialNumberPassport,
        }
      : null;
    try {
      const res = await clientInstance.put(`/api/passengers/${id}`, {
        '@type': 'Passenger',
        answerQuestion: data.questionAnswer || 'null',
        birthDate: data.birthDate,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        passport,
        password: data.confirmPassword,
        phoneNumber: data.phoneNumber,
        roles: [
          {
            name: 'ROLE_PASSENGER',
          },
        ],
        securityQuestion: data.question || 'null',
      });
      return res.data as IEditUsersData;
    } catch (e) {
      throw Error('Ошибка запроса');
    }
  },
};
