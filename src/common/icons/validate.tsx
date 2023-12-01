import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import validate from '@images/validate.svg';

const Validate: FC<ImageProps> = (props) => <Image src={validate} {...props} />;

export default Validate;
