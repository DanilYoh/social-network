import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import clock from '@images/clock.svg';

const ClockIcon: FC<ImageProps> = (props) => <Image src={clock} {...props} />;

export default ClockIcon;
