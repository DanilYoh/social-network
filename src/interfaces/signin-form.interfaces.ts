export interface FormProps {
  children?: JSX.Element;
}

export interface SignInData {
  email: string;
  password: string;
}

export interface UserData extends SignInData {
  isLogin: boolean;
}

export interface FormInputProps {
  label: string;
  error?: string;
  touch?: boolean;
  focus?: boolean | null;
  id: string;
  type: string;
}

export interface InputIconProps {
  handleClick?: () => void;
  show?: boolean;
}
