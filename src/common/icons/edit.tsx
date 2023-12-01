import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import edit from '@images/edit-icon.svg';

const Edit: FC<ImageProps> = (props) => <Image src={edit} {...props} />;

export default Edit;
