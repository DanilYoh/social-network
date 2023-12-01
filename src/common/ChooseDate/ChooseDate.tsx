import { FC } from 'react';
import {
  Flex,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
} from '@chakra-ui/react';

import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';

interface IChangeDate {
  dates: {
    id: number;
    date: string;
    price: string;
  }[];
  previousDate: () => void;
  nextDate: () => void;
  chooseDate: () => void;
}

const DateStat = ({
  date,
  price,
  chooseDate,
}: {
  date: string;
  price: string;
  chooseDate: () => void;
}) => (
  <Stat data-testid="chooseDate" onClick={chooseDate} cursor="pointer">
    <StatNumber fontSize={15}>{price}</StatNumber>
    <StatHelpText fontSize={12}>{date}</StatHelpText>
  </Stat>
);

const CurrentDateStat = ({ date, price }: { date: string; price: string }) => (
  <Stat width="108px" top="-30%" alignContent="center" padding="">
    <Flex
      margin="0 auto"
      direction="column"
      height="68px"
      border="1px solid #D9D9D9"
      width="108px"
      borderRadius={4}
      background="#FFFFFF"
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
      alignItems="center"
      padding="0.7em"
      color="#0A66C2"
    >
      <StatLabel>{price}</StatLabel>
      <StatHelpText>{date}</StatHelpText>
    </Flex>
  </Stat>
);

const ChooseDate: FC<IChangeDate> = ({
  dates,
  previousDate,
  nextDate,
  chooseDate,
}) => (
  <Flex
    position="relative"
    gap="10px"
    alignItems="center"
    width="100%"
    justifyContent="space-around"
    textAlign="center"
  >
    <Button
      position="absolute"
      left="-10"
      onClick={previousDate}
      colorScheme="blue"
      width="10px"
      leftIcon={<ArrowLeft />}
      variant="ghost"
      data-testid="previousDateButton"
    />
    <StatGroup
      width="100%"
      border="1px solid #D9D9D9"
      borderRadius={4}
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
      height="45px"
    >
      {dates.map((el, index) =>
        index !== 3 ? (
          <DateStat
            key={el.id}
            date={el.date}
            price={el.price}
            chooseDate={chooseDate}
          />
        ) : (
          <CurrentDateStat key={el.id} date={el.date} price={el.price} />
        )
      )}
    </StatGroup>
    <Button
      position="absolute"
      right="-10"
      onClick={nextDate}
      colorScheme="blue"
      width="10px"
      rightIcon={<ArrowRight />}
      variant="ghost"
      data-testid="nextDateButton"
    />
  </Flex>
);

export default ChooseDate;
