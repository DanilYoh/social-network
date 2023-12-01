import { FC } from 'react';

import { TModalMeta } from '@interfaces/modal-meta.interfaces';
import { TicketForm } from '@components/TicketForm';

interface ModalContentElement {
  meta: TModalMeta;
}

const ModalContentElement: FC<ModalContentElement> = ({ meta }) => {
  switch (meta.type) {
    case 'ticket':
      return <TicketForm meta={meta} />;
    default:
      throw new Error('No such ModalContentElement');
  }
};

export default ModalContentElement;
