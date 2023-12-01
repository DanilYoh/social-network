import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';

import cardsReducer from '@/store/card.slice';
import userReducer from '@/store/user.slice';
import popMessageReducer from '@/store/pop-message.slice';
// eslint-disable-next-line import/no-cycle
import searchReducer from '@/store/search.slice';
import seatReducer from '@/store/seats.slice';
import usersReducer from '@/store/users.slice';
import paymentReducer from '@/store/payment.slice';
import modalReducer from '@/store/modal.slice';
import baggageReducer from '@/store/price-baggage.slice';
import destinationReducer from '@/store/destinations-admin.slice';
import flightsReducer from '@/store/flights.slice';
import ticketsReducer from '@/store/tickets.slice';
import aircraftsReducer from '@/store/aircrafts.slice';
import timezonesReducer from '@/store/timezones-admin.slice';
import { bookingReducer } from '@/store/booking-admin.slice';

const rootReducer = combineReducers({
  user: userReducer,
  cards: cardsReducer,
  search: searchReducer,
  seats: seatReducer,
  modal: modalReducer,
  popMessage: popMessageReducer,
  users: usersReducer,
  payment: paymentReducer,
  baggage: baggageReducer,
  destination: destinationReducer,
  flights: flightsReducer,
  tickets: ticketsReducer,
  aircrafts: aircraftsReducer,
  timezones: timezonesReducer,
  booking: bookingReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
