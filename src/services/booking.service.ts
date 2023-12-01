import { adminInstance } from '@/instances/admin-instance';
import Endpoints from '@enums/endpoints';
import { PAGE_SIZE } from '@enums/constants';
import { TAdminBookingForm } from '@interfaces/admin-booking.interfaces';

export const BookingService = {
  fetchAdminBookingList: (page: number) =>
    adminInstance
      .get(Endpoints.API_BOOKINGS, {
        params: {
          page,
          size: PAGE_SIZE,
        },
      })
      .then((bookingsResponse) => bookingsResponse),

  deleteAdminBookingById: (id: number) =>
    adminInstance
      .delete(`${Endpoints.API_BOOKINGS}/${id}`)
      .then((deleteResponse) => deleteResponse),
  fetchFlights: (cityFrom: string, cityTo: string, page: number) =>
    adminInstance
      .get(Endpoints.API_FLIGHTS, {
        params: {
          cityFrom,
          cityTo,
          page,
          size: 100,
        },
      })
      .then((flightsResponse) => flightsResponse),
  fetchBookingDestinationsByPage: (page: number) =>
    adminInstance
      .get(Endpoints.API_DESTINATIONS, {
        params: {
          page,
          size: 100,
        },
      })
      .then((destinationsResponse) => destinationsResponse),
  fetchPassengersByPage: (page: number) =>
    adminInstance
      .get(Endpoints.API_PASSENGERS, {
        params: { page, size: 100 },
      })
      .then((passengersResponse) => passengersResponse),
  create: (booking: TAdminBookingForm) =>
    adminInstance
      .post(Endpoints.API_BOOKINGS, booking)
      .then((createResponse) => createResponse),
  edit: (booking: TAdminBookingForm, id: number) =>
    adminInstance
      .patch(`${Endpoints.API_BOOKINGS}/${id}`, booking)
      .then((createResponse) => createResponse),
  fetchBookingById: (id: number) =>
    adminInstance
      .get(`${Endpoints.API_BOOKINGS}/${id}`)
      .then((booking) => booking),
};
