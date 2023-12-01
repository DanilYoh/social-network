import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import uncheck from '@images/uncheck.svg';

const Uncheck: FC<ImageProps> = (props) => <Image src={uncheck} {...props} />;

export default Uncheck;
