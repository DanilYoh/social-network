import { TabList } from '@chakra-ui/react';
import React from 'react';

import { IResultsTabList } from '@interfaces/results.interfaces';

const ResultsTabList: React.FC<IResultsTabList> = ({ children }) => (
  <TabList
    position={['static', 'static', 'static', 'fixed']}
    flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
    flex="1 0 auto"
    top={0}
    left={0}
    w="100%"
    zIndex={1001}
    justifyContent="center"
    alignItems="center"
    h={['auto', 'auto', 'auto', '4.6875rem']}
    pointerEvents="none"
    bg="#04396D"
  >
    {children}
  </TabList>
);

export default ResultsTabList;
