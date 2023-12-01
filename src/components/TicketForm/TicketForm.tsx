import { FC } from 'react';

import { FormOuter } from '@components/FormCommon/FormOuter';
import { useTicketFields } from '@/hooks/useTicketFields/useTicketFields';
import { TModalMeta } from '@interfaces/modal-meta.interfaces';

interface ITicketForm {
  meta: TModalMeta;
}

const TicketForm: FC<ITicketForm> = ({ meta }) => {
  const properties = useTicketFields({ meta });
  return <FormOuter buttonText="Save" {...properties} />;
};

export default TicketForm;
