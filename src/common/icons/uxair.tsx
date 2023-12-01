import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import uxAirLogo from '@images/ux-air_logo.svg';

const Uxair: FC<ImageProps> = (props) => <Image src={uxAirLogo} {...props} />;

export default Uxair;
