/* eslint-disable no-return-assign */
import { FC } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';

import { useAppSelector } from '@/hooks';

const PriceDetails: FC = () => {
  let price = 0;
  useAppSelector((state) =>
    state.baggage.map((el) => (price += el.priceBaggage))
  );

  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="10px">
      <Box fontSize="16px" height="15px" textAlign="right">
        {' '}
        Ticket Price
      </Box>
      <Box fontSize="16px" height="15px" textAlign="right">
        {' '}
        CHF 6,110.00
      </Box>
      <Box fontSize="12px" height="15px" textAlign="right">
        {' '}
        Flight Price
      </Box>
      <Box fontSize="12px" height="15px" textAlign="right">
        {' '}
        CHF 5,804.50
      </Box>
      <Box fontSize="12px" height="15px" textAlign="right">
        {' '}
        Taxes and Fees
      </Box>
      <Box fontSize="12px" height="15px" textAlign="right">
        {' '}
        CHF 305.50
      </Box>
      <Box fontSize="16px" height="15px" textAlign="right">
        {' '}
        Additional Services
      </Box>
      <Box fontSize="16px" height="15px" textAlign="right">
        {' '}
        CHF 250.00
      </Box>
      <Box fontSize="12px" height="15px" textAlign="right">
        {' '}
        Extra Baggage
      </Box>
      <Box fontSize="12px" height="15px" textAlign="right">
        {' '}
        CHF {price}{' '}
      </Box>
    </SimpleGrid>
  );
};

export default PriceDetails;
