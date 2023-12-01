import { Flex } from '@chakra-ui/react';

import { TicketsTableV2 } from '@components/TicketsCommon/TicketsTableV2';
import { TicketsPagination } from '@components/TicketsCommon/TicketsPagination';

const TicketsInfo = () => (
  <Flex
    fontSize="0.875rem"
    display="flex"
    flexDirection="column"
    boxSizing="border-box"
    gap="1.375rem"
    minH="31.25rem"
  >
    <TicketsTableV2 />
    <TicketsPagination />
  </Flex>
);
export default TicketsInfo;
