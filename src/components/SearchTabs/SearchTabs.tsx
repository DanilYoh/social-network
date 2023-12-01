import { Box, Flex, TabList, TabPanels, Tabs } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { SearchTab, SearchTabPanel } from '@common/SearchTabs';
import flightIcon from '@images/flight.png';
import { SearchForm } from '@components/SearchForm';

const SearchTabs = (): ReactElement => {
  const navigation = useNavigate();

  const onSearchSubmit = () => {
    navigation('/search/results');
  };

  return (
    <Box
      maxWidth="65.25rem"
      width="100%"
      m="auto"
      padding="0 0.3127rem"
      pos="relative"
    >
      <Tabs variant="unstyled">
        <TabList>
          <SearchTab title="flights" icon={flightIcon} />
          <SearchTab title="check-in" />
          <SearchTab title="manage booking" />
        </TabList>
        <TabPanels
          backgroundColor="#fff"
          borderRadius="0 0.375rem 0.375rem 0.375rem"
        >
          <SearchTabPanel>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              padding="3.25rem 1.25rem 1.75rem"
            >
              <SearchForm onSearchSubmit={onSearchSubmit} />
            </Flex>
          </SearchTabPanel>
          <SearchTabPanel>2</SearchTabPanel>
          <SearchTabPanel>3</SearchTabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default SearchTabs;
