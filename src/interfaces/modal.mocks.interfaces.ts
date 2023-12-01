import { ButtonProps } from '@chakra-ui/react';

import { TModalMeta } from '@interfaces/modal-meta.interfaces';

export interface IOpenModalButtonMock {
  buttonText: string;
  onClick: () => void;
  props?: ButtonProps;
}

export interface IModalV2Mock {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export interface IModalManagerMocks {
  isOpen: boolean;
  meta: TModalMeta | null;
  setClose: () => void;
}
