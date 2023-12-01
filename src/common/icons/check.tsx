import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import check from '@images/check.svg';

const Check: FC<ImageProps> = (props) => <Image src={check} {...props} />;

export default Check;
