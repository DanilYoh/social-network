import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import reset from '@images/reset.svg';

const Reset: FC<ImageProps> = (props) => <Image src={reset} {...props} />;

export default Reset;
