import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import wrongdata from '@images/wrongdata.svg';

const Wrongdata: FC<ImageProps> = (props) => (
  <Image src={wrongdata} {...props} />
);

export default Wrongdata;
