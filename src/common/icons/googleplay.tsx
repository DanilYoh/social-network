import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import googleplay from '@images/googleplay.png';

const GooglePlay: FC<ImageProps> = (props) => (
  <Image src={googleplay} {...props} />
);

export default GooglePlay;
