import { TabPanel } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { ISearchPanel } from '@interfaces/search-tabs.interfaces';

const SearchTabPanel: React.FC<ISearchPanel> = ({ children }): ReactElement => (
  <TabPanel padding="0">{children}</TabPanel>
);

export default SearchTabPanel;
