import { Tabs, TabPanels, Flex, Box, Button, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import { ResultsTabList, ResultsTab, ResultsTabPanel } from '@common/Results';
import Separator from '@icons/separator';
import { PassengerDetails } from '@components/PassengerDetails';
import { ExtraBaggage } from '@pages/extra-baggage';
import Payment from '@components/Payment/Payment';
import { useAppSelector } from '@/hooks';
import { ChooseTicket } from '@components/ChooseTicket';

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [disabled, setDisabled] = useState<boolean>(false);
  const val: boolean = useAppSelector((state) => state.payment.isValid);
  const navigate = useNavigate();

  const onConfirm = (): void => {
    if (activeTab < 4) {
      setActiveTab((prevState) => prevState + 1);
    }
    if (activeTab === 4 && !disabled) {
      navigate('/payment/thanks');
    }
  };

  useEffect(() => {
    if (activeTab === 4) {
      setDisabled(!val);
    }
  }, [activeTab, val]);

  return (
    <>
      <Tabs index={activeTab} variant="unstyled" flex="1 0 auto">
        <ResultsTabList>
          <ResultsTab title="select departing flight" />
          <Separator />
          <ResultsTab title="select return flight" />
          <Separator />
          <ResultsTab title="passenger details" />
          <Separator />

          <ResultsTab title="additional services" />
          <Separator />
          <ResultsTab title="payment" />
        </ResultsTabList>
        <TabPanels>
          <ResultsTabPanel>
            <Flex alignItems="center">
              <Box>1</Box>
            </Flex>
          </ResultsTabPanel>
          <ResultsTabPanel>
            <Flex>
              <ChooseTicket />
            </Flex>
          </ResultsTabPanel>
          <ResultsTabPanel>
            <PassengerDetails />
          </ResultsTabPanel>
          <ResultsTabPanel>
            <ExtraBaggage />
          </ResultsTabPanel>
          <ResultsTabPanel>
            <Payment />
          </ResultsTabPanel>
        </TabPanels>
      </Tabs>

      <Flex
        as="footer"
        p="1.0625rem 1.5625rem .5625rem"
        backgroundColor="#04396D"
        color="#fff"
        justifyContent="space-between"
        alignItems={{ base: 'center', dt: 'flex-start' }}
        flexDirection={{ base: 'column', dt: 'row' }}
      >
        <Flex
          flex="1 0 50%"
          mb={{ base: '1rem', dt: 0 }}
          alignItems={{ base: 'center', dt: 'flex-start' }}
        >
          <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            alignItems={{ base: 'flex-end', mdp: 'flex-start' }}
          >
            <Box
              mr={{ base: 0, md: '1.444rem' }}
              textTransform="uppercase"
              fontSize=".875rem"
              fontWeight={700}
            >
              Departure
            </Box>
            <Box textTransform="uppercase" fontSize=".875rem" fontWeight={700}>
              ZRH-JFK
            </Box>
          </Flex>
          <Divider
            orientation="vertical"
            backgroundColor="#D9D9D9"
            h={{ base: '3rem', dt: '3.6875rem' }}
            boxShadow=".5px 0px 0px #D9D9D9"
            m="0 2.5rem"
          />
          <Flex flexDirection={{ base: 'column', md: 'row' }}>
            <Box
              mr="1.444rem"
              textTransform="uppercase"
              fontSize=".875rem"
              fontWeight={700}
            >
              return
            </Box>
            <Box textTransform="uppercase" fontSize=".875rem" fontWeight={700}>
              JFK-ZRH
            </Box>
          </Flex>
        </Flex>
        <Flex
          flex="1 0 50%"
          alignItems="center"
          justifyContent={{ base: 'center', dt: 'flex-end' }}
          flexWrap="wrap"
        >
          <Flex
            mr={{ base: 0, dt: '1.851rem' }}
            mb={{ base: '1rem', dt: 0 }}
            fontSize="1rem"
            fontWeight={700}
            flexDirection="column"
            alignItems={{ base: 'center', dt: 'flex-end' }}
            flex={{ base: '0 0 100%', dt: '0 0 50%' }}
          >
            <Box textAlign="right" whiteSpace="nowrap">
              Total Price for 2 Passengers
            </Box>
            <Box textTransform="uppercase">CHF 6,110.00</Box>
          </Flex>
          <Button
            type="button"
            aria-label="confirm"
            onClick={onConfirm}
            backgroundColor="#E32E22"
            fontSize=".875rem"
            fontWeight={700}
            h="2.5rem"
            textTransform="uppercase"
            p="0 2.3125rem"
            disabled={disabled}
            _hover={{ backgroundColor: '#e61f12' }}
            _active={{ backgroundColor: '#e61f12' }}
            transition="background-color .3s ease"
          >
            confirm
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default ResultsPage;
