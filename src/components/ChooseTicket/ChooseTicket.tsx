/* eslint-disable @typescript-eslint/no-empty-function */
import { FC } from 'react';
import { Flex } from '@chakra-ui/react';

import { flightCardData } from '@/mocks/FlightCard';
import { dates } from '@/mocks/ChooseDate';
import { ChooseDate } from '@common/ChooseDate';
import { TicketFilter } from '@components/TicketFilter';
import { FlightCard } from '@components/FlightCard';

const ChooseTicket: FC = () => (
  <Flex
    data-testid="choose-ticket"
    direction="column"
    alignItems="center"
    width="1180px"
    gap="2em"
  >
    <ChooseDate
      dates={dates}
      previousDate={(): void => {}}
      nextDate={(): void => {}}
      chooseDate={(): void => {}}
    />
    <TicketFilter />
    <Flex
      direction="column"
      justifyContent="center"
      maxWidth="1184px"
      width="100%"
      margin="0 auto"
      gap="21px 0"
    >
      {flightCardData.map((el) => (
        <FlightCard key={el.id} data={el} />
      ))}
    </Flex>
  </Flex>
);

export default ChooseTicket;
