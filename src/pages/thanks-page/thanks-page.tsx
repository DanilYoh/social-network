import { Tabs, Flex, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { ResultsTabList, ResultsTab } from '@common/Results';
import Separator from '@icons/separator';
import { Footer } from '@/components/Footer';
import { City } from '@common/icons';

const ThanksPage = () => (
  <>
    <Tabs index={-1} variant="unstyled" flex="1 0 auto">
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
      <Flex
        alignItems="center"
        flexDirection="column"
        color="#868484"
        fontWeight="600"
        fontSize="24px"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          marginTop="240px"
        >
          <Box>
            Thank you for choosing{' '}
            <Link to="/home" style={{ color: '#0A66C2' }}>
              UX AIR
            </Link>
            , your payment is confirmed!
          </Box>
          <Box marginTop="8px">
            Your PNR (Reservation Number) is{' '}
            <span style={{ color: '#0A66C2' }}>UX25018</span>.
          </Box>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="flex-start"
          justifyContent="center"
          marginTop="140px"
          width="88%"
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            width="16%"
            marginRight="16px"
          >
            <Box
              marginRight="10%"
              marginTop="8%"
              color="#0A66C2"
              fontSize="22px"
              lineHeight="30px"
            >
              EXPLORE NEW YORK BEFORE YOUR TRIP
            </Box>
            <Flex
              flexDirection="column"
              marginTop="24px"
              fontSize="16px"
              lineHeight="22px"
              width="80%"
            >
              <Box
                marginBottom="24px"
                textDecoration="underline"
                color="#0A66C2"
              >
                Your New York City Guide
              </Box>
              <Box>
                Explore 10 Best Things to do in New York City, Hidden Gems, best
                museums, restaurants and more...
              </Box>
            </Flex>
          </Flex>
          <City maxHeight="367px" maxWidth="614px" height="auto" width="40%" />
        </Flex>
      </Flex>
    </Tabs>
    <Footer />
  </>
);

export default ThanksPage;
