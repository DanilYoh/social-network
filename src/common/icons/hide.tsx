import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import hide from '@images/hide.svg';

const HideIcon: FC<ImageProps> = (props) => <Image src={hide} {...props} />;

export default HideIcon;
