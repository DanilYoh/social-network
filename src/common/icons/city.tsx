import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import city from '@images/city-image.png';

const City: FC<ImageProps> = (props) => <Image src={city} {...props} />;

export default City;
