import { Flex } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks';
import { TravelCard } from '@common/TravelCard';
import { ICard } from '@interfaces/formik.interfaces';
import { getCards } from '@/store/card.slice';

const CardsList: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards([]));
  }, [dispatch]);
  const Cards: ICard[] = useAppSelector((state) => state.cards);
  return (
    <Flex
      fontFamily="Open Sans"
      columnGap="1.5622rem"
      rowGap="0.9375rem"
      flexWrap="wrap"
      data-testid="cardsWrapper"
      justifyContent={{
        sm: 'center',
        md: 'flex-start',
      }}
    >
      {Cards.map((element) => (
        <TravelCard key={`${element.title}_${Date.now()}`} {...element} />
      ))}
    </Flex>
  );
};

export default CardsList;
