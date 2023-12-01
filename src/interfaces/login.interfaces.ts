export interface IResponseLogin {
  accessToken: string;
  refreshToken: string;
  type: string;
}

export interface ILoginValue {
  email: string;
  password: string;
}

export interface ILoginData {
  username?: string;
  email?: string;
  password: string;
}

export interface IAdminData extends ILoginValue {
  isLogin: boolean;
}
