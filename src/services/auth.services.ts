import Endpoints from '@enums/endpoints';
import { ILoginData } from '@interfaces/login.interfaces';
import { adminInstance } from '@/instances/admin-instance';
import { IClientSignUpData } from '@interfaces/client-sign-up.interfaces';
import { clientInstance } from '@/instances/client-instance';

export const AuthServices = {
  LoginApi: async (data: ILoginData) =>
    adminInstance
      .post(Endpoints.API_AUTH_LOGIN, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  SignUpApi: async (data: IClientSignUpData) =>
    clientInstance
      .post(Endpoints.API_ACCOUNTS_CREATE, data)
      .then((res) => res)
      .catch(() => {
        throw Error();
      }),
};
