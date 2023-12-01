import { Flex } from '@chakra-ui/react';
import { FC } from 'react';

import { Regulations } from '@common/Regulations';
import { CardsList } from '@components/CardsList';

const HomeCards: FC = () => (
  <Flex
    maxW="72.1875rem"
    width="calc(100% * 0.912698)"
    flexDirection="column"
    fontFamily="Open Sans"
    justify="flex-end"
    rowGap="0.5002rem"
    alignItems={{ sm: 'center', md: 'flex-start' }}
    pos="relative"
    m="auto"
    mt={['0.75rem', '4.5rem', '6.3128rem']}
  >
    <Regulations />
    <CardsList />
  </Flex>
);

export default HomeCards;
