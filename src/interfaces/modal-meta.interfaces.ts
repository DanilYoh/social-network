interface BaseModalAction<T extends string> {
  type: T;
  title: string;
}

export interface IModalEdit<T extends string> extends BaseModalAction<T> {
  action: 'edit';
  id: string;
}

export interface IModalCreate<T extends string> extends BaseModalAction<T> {
  action: 'create';
}

type TModalTypes = 'ticket';
export type TModalMeta<T extends string = TModalTypes> =
  | IModalCreate<T>
  | IModalEdit<T>;

export interface IModalState {
  isOpen: boolean;
  meta: TModalMeta | null;
}
