import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import arrowBottom from '@images/arrowBottom.svg';

const ArrowBottom: FC<ImageProps> = (props) => (
  <Image src={arrowBottom} {...props} />
);

export default ArrowBottom;
