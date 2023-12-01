import { TabPanel } from '@chakra-ui/react';
import React from 'react';

import { IResultsTabPanel } from '@interfaces/results.interfaces';

const ResultsTabPanel: React.FC<IResultsTabPanel> = ({ children }) => (
  <TabPanel display="flex" justifyContent="center">
    {children}
  </TabPanel>
);

export default ResultsTabPanel;
