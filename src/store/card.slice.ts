import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { ICard } from '@interfaces/formik.interfaces';

const initialState: ICard[] = [
  {
    title: 'DISCOVER',
    header: 'Explore the world',
    text: 'We fly over 200 destinations around the world. Explore all our destinations and new routes.',
    image: 'https://i.ibb.co/4gXNq04/discover.png',
  },
  {
    title: 'HOLIDAY DESTINATIONS',
    header: 'Get inspired',
    text: 'Looking for summer destinations, city gate aways or hidden gems? Discover best locations across the globe.',
    image: 'https://i.ibb.co/KVmVFk7/inspired.png',
  },
  {
    title: 'OUR BEST OFFERS',
    header: 'Surprise yourself ',
    text: 'Benefit from our best deals and fly to your favourite  destinations. Or maybe explore a new one?',
    image: 'https://i.ibb.co/xHkwqzq/surprise.png',
  },

  {
    title: 'ADDITIONAL SERVICES',
    header: 'Enjoy extra comfort',
    text: 'Explore our additional services including seat selection, extra baggage, add-on in-flight menus',
    image: 'https://i.ibb.co/xGWYz1M/enjoy.png',
  },
];

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    getCards(state, action: PayloadAction<ICard[]>) {
      state.push(...action.payload);
    },
  },
});

export const { getCards } = cardsSlice.actions;

export default cardsSlice.reducer;
