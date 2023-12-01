import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import flight from '@images/flight.png';

const Flight: FC<ImageProps> = (props) => <Image src={flight} {...props} />;

export default Flight;
