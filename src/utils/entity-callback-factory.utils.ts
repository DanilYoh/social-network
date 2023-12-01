import { IFormCallbackObject } from '@interfaces/form-callback-object.interfaces';
import { TModalMeta } from '@interfaces/modal-meta.interfaces';

type EntityCallbackFactory<C extends string, E extends string> = {
  create: IFormCallbackObject<C>;
  edit: IFormCallbackObject<E>;
};
export const entityCallbackFactory =
  <C extends string, E extends string>(props: EntityCallbackFactory<C, E>) =>
  (meta: TModalMeta) => {
    switch (meta.action) {
      case 'create':
        return props.create;
      case 'edit':
        return props.edit;
      default:
        throw new Error(`No such type of action`);
    }
  };
