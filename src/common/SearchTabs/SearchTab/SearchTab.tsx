import { Image, Tab } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import { ISearchTab } from '@interfaces/search-tabs.interfaces';

const SearchTab: React.FC<ISearchTab> = ({ title, icon }): ReactElement => (
  <Tab
    maxWidth={{ base: 'none', smp: '9.675rem' }}
    height="2.175rem"
    fontFamily="Open Sans"
    fontSize={{ base: '0.75rem', smp: '0.87rem' }}
    fontWeight="700"
    letterSpacing="-0.03rem"
    textTransform="uppercase"
    color="rgba(0, 0, 0, .71)"
    backgroundColor="#fff"
    border="none"
    borderRadius="0.375rem 0.375rem 0 0"
    justifyContent="flex-start"
    alignItems="center"
    columnGap="0.3rem"
    textDecoration="underline"
    textDecorationColor="transparent"
    transition="text-decoration-color .3s ease"
    padding={{ base: '0 0.375rem', smp: '0 0.75rem' }}
    marginRight="0.6225rem"
    _last={{ marginRight: 0 }}
    _selected={{ color: '#0A66C2', outline: 'none' }}
    _hover={{ textDecorationColor: 'inherit' }}
  >
    {title}
    {icon && <Image src={icon} alt={title} />}
  </Tab>
);

export default SearchTab;
