import createMockStore from 'redux-mock-store';

import { TicketCategory } from '@enums/ticket-category';
import { RootState } from '@/store';

const mockedBooking = {
  booking: {
    bookingsList: [
      {
        id: 1,
        bookingNumber: 'SV-221122',
        bookingData: '2022-11-21T21:00:00',
        passengerId: 4,
        flightId: 1,
        categoryType: TicketCategory.BUSINESS,
      },
      {
        id: 2,
        bookingNumber: 'CK-231122',
        bookingData: '2022-11-22T21:00:00',
        passengerId: 5,
        flightId: 1,
        categoryType: TicketCategory.PREMIUM_ECONOMY,
      },
      {
        id: 3,
        bookingNumber: 'BK-00001',
        bookingData: '2022-11-23T21:00:00',
        passengerId: 4,
        flightId: 1,
        categoryType: TicketCategory.ECONOMY,
      },
    ],
  },
};

const mockedStore = createMockStore<RootState>();
export const store = mockedStore(mockedBooking as RootState);
