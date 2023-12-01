import { Flex } from '@chakra-ui/react';

import { HomeCards } from '@pages/home-cards';
import { SearchTabs } from '@components/SearchTabs';

const HomePage = () => (
  <Flex
    flexDir="column"
    overflow="auto"
    pt={['3.75rem', '3.75rem', '8.625rem']}
    pb="4.125rem"
  >
    <SearchTabs />
    <HomeCards />
  </Flex>
);

export default HomePage;
