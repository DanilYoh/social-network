import { FC } from 'react';

import { TModalMeta } from '@interfaces/modal-meta.interfaces';
import { ModalContentElement } from '@components/ModalCommon/ModalContentElement';

interface ModalElement {
  meta: TModalMeta | null;
}

const ModalElement: FC<ModalElement> = ({ meta }) => {
  if (!meta) return 'No ModalMeta was found';
  return <ModalContentElement meta={meta} />;
};

export default ModalElement;
