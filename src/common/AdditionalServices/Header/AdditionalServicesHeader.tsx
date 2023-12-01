import { FC } from 'react';
import { Box, Flex, TabPanels, Tabs } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { PassengerDetails } from '@components/PassengerDetails';
import { ResultsTab, ResultsTabList, ResultsTabPanel } from '@common/Results';
import { Logo } from '@/common/Logo';
import Separator from '@icons/separator';

import { ButtonHelp } from '../ButtonHelp';

export const AdditionalServicesHeader: FC = () => (
  <Tabs variant="unstyled" flex="1 0 auto">
    <ResultsTabList>
      <Flex justifyContent="space-between" w="95%">
        <Link to="/home">
          <Logo />
        </Link>

        <Flex>
          <ResultsTab title="select departing flight" />
          <Separator />
          <ResultsTab title="select return flight" />
          <Separator />
          <ResultsTab title="passenger details" />
          <Separator />
          <ResultsTab title="additional services" />
          <Separator />
          <ResultsTab title="payment" />
        </Flex>

        <Flex>
          <ButtonHelp text="CHF" type="button" />
        </Flex>
      </Flex>
    </ResultsTabList>

    <TabPanels>
      <ResultsTabPanel>
        <Flex alignItems="center">
          <Box />
        </Flex>
      </ResultsTabPanel>

      <ResultsTabPanel>
        <Flex alignItems="center">
          <Box />
        </Flex>
      </ResultsTabPanel>

      <ResultsTabPanel>
        <PassengerDetails />
      </ResultsTabPanel>

      <ResultsTabPanel>
        <Flex alignItems="center">
          <Box />
        </Flex>
      </ResultsTabPanel>

      <ResultsTabPanel>
        <Flex alignItems="center">
          <Box />
        </Flex>
      </ResultsTabPanel>
    </TabPanels>
  </Tabs>
);
