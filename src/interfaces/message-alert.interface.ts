type AlertStatusType =
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'loading'
  | undefined;

export interface IMessageAlert {
  status: AlertStatusType;
  title: string;
}
