import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import transfer from '@images/transfers.svg';

const TransferIcon: FC<ImageProps> = (props) => (
  <Image src={transfer} {...props} />
);

export default TransferIcon;
