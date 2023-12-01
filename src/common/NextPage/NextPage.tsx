import { Box, Text } from '@chakra-ui/react';
import type { FC } from 'react';

import { Arrow } from '@icons/index';

const NextPage: FC = () => (
  <Box
    display="flex"
    flexDirection="row"
    justifyContent="space-between"
    alignItems="center"
    alignContent="center"
    width="11.2rem"
  >
    <Text whiteSpace="nowrap" fontSize="0.875rem" m="0">
      Следующая страница
    </Text>
    <Arrow />
  </Box>
);

export default NextPage;
