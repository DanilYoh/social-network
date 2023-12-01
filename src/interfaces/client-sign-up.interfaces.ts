export interface IClientSignUpData {
  answerQuestion: string;
  email: string;
  password: string;
  roles: [
    {
      name: string;
    }
  ];
  securityQuestion: string;
}
