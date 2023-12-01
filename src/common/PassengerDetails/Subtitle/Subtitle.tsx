import { type FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { ISubtitle } from '@interfaces/passenger-details.interfaces';

const Subtitle: FC<ISubtitle> = ({ icon, title }) => (
  <Flex alignItems="center">
    {icon}
    <Box
      as="span"
      color="#868484"
      fontSize=".75rem"
      lineHeight="1.5625rem"
      textTransform="uppercase"
      fontWeight={700}
    >
      {title}
    </Box>
  </Flex>
);

export default Subtitle;
