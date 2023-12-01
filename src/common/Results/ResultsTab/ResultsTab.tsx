import React from 'react';
import { Tab } from '@chakra-ui/react';

import { IResultsTab } from '@interfaces/results.interfaces';

const ResultsTab: React.FC<IResultsTab> = ({ title }) => (
  <Tab
    w="100%"
    flexDirection="column"
    maxW={{ base: 'auto', dtp: '9rem', dl: 'max-content' }}
    fontSize={{ base: '0.8745rem', dtp: '0.75rem', dl: '0.8745rem' }}
    fontWeight={700}
    textTransform="uppercase"
    color="#A6A6A6"
    _selected={{ color: '#EE5F5F' }}
    _after={{
      base: {
        content: '""',
        display: 'block',
        border: 'solid #A6A6A6',
        borderWidth: '0 0.225rem 0.225rem 0',
        padding: '0.225rem',
        transform: 'rotate(45deg)',
      },
      dtp: {
        display: 'none',
      },
    }}
    _last={{ _after: { display: 'none' } }}
  >
    {title}
  </Tab>
);

export default ResultsTab;
