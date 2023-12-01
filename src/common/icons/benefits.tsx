import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import benefits from '@images/benefitsmini.svg';

const Benefits: FC<ImageProps> = (props) => <Image src={benefits} {...props} />;

export default Benefits;
