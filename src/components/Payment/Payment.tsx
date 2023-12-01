import { FC } from 'react';
import { Flex, Text } from '@chakra-ui/react';

import { AdditionalServicesHeader } from '@/common/AdditionalServices/Header/AdditionalServicesHeader';
import { AdditionalServicesFooter } from '@/common/AdditionalServices/Footer/AdditionalServicesFooter';

import PaymentCard from '../PaymentCard/PaymentCard';
import PaymentMethods from '../PaymentMethods/PaymentMethods';

const Payment: FC = () => (
  <>
    <Flex
      pl={{ dt: 178 }}
      pt={95}
      pb={110}
      w="100%"
      alignItems="flex-start"
      direction="column"
      mb="1rem"
    >
      <AdditionalServicesHeader />
      <Text mb={45} fontSize="24px" color="#0A66C2">
        Choose your payment method
      </Text>
      <PaymentMethods />
      <PaymentCard />
    </Flex>
    <AdditionalServicesFooter />
  </>
);

export default Payment;
