import { AlertStatus } from '@chakra-ui/alert';

export type IPopMessage = {
  status?: AlertStatus;
  message: string;
};

export interface IPopMessageState {
  meta: IPopMessage | null;
}
