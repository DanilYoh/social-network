import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import close from '@images/close.svg';

const Close: FC<ImageProps> = (props) => <Image src={close} {...props} />;

export default Close;
