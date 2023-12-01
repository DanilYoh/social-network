import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import show from '@images/show.svg';

const ShowIcon: FC<ImageProps> = (props) => <Image src={show} {...props} />;

export default ShowIcon;
