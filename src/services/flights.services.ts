import { adminInstance } from '@/instances/admin-instance';
import { IDataForm } from '@interfaces/modal-form-props.interfaces';
import Endpoints from '@enums/endpoints';
import { PAGE_SIZE } from '@enums/constants';

export const FlightsAdminApi = {
  getAdminFlights: (page = 0) =>
    adminInstance
      .get(Endpoints.API_FLIGHTS, {
        params: { page, size: PAGE_SIZE },
      })
      .then((response) => response)
      .catch(() => {
        throw Error('Ошибка запроса');
      }),
  postAdminFlights: (data: IDataForm) =>
    adminInstance
      .post(Endpoints.API_FLIGHTSADD, data)
      .then((response) => response)
      .catch(() => {
        throw Error('Ошибка запроса');
      }),
  patchAdminFlights: (data: IDataForm, id: number) =>
    adminInstance
      .patch(`/api/flights/${id}`, data)
      .then((response) => response)
      .catch(() => {
        throw Error('Ошибка запроса');
      }),
  deleteAdminFlights: (id: number) =>
    adminInstance
      .delete(`/api/flights/${id}`)
      .then((response) => response)
      .catch(() => {
        throw Error('Ошибка запроса');
      }),
  getFlightById: (id: number) =>
    adminInstance
      .get(`${Endpoints.API_FLIGHTSADD}/${id}`)
      .then((flight) => flight),
};
