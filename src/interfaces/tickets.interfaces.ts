import { IEntitiesResponse } from '@interfaces/pagination-response.interfaces';

export interface ITicket {
  arrivalDateTime: string;
  code: string;
  departureDateTime: string;
  firstName: string;
  flightId: number;
  flightSeatId: number;
  from: string;
  id: number;
  lastName: string;
  passengerId: number;
  seatNumber: string;
  ticketNumber: string;
  to: string;
}

export type TTicketsResponse = IEntitiesResponse<ITicket[]>;
