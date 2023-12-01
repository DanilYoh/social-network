import { Image, type ImageProps } from '@chakra-ui/react';
import type { FC } from 'react';

import appstore from '../../assets/images/appstore.png';

const AppStore: FC<ImageProps> = (props) => <Image src={appstore} {...props} />;

export default AppStore;
