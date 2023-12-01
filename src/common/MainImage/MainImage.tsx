import { Image } from '@chakra-ui/react';
import type { FC } from 'react';

import mainImage from '@assets/palm.png';

const MainImage: FC = () => (
  <Image
    pos="absolute"
    maxW={{ sm: '200vw', dt: '87.75rem' }}
    w="100%"
    src={mainImage}
    alt="Palm Tree on the beach"
    top="4.6875rem"
    left="50%"
    transform="translateX(-50%)"
    data-testid="image"
  />
);

export default MainImage;
