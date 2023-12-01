import { TicketCategory } from '@enums/ticket-category';

export interface IAdminBooking {
  id: number;
  bookingNumber: string;
  bookingData: string;
  passengerId: number;
  flightId: number;
  categoryType: TicketCategory;
}

export type TAdminBookingForm = Omit<IAdminBooking, 'id'>;
