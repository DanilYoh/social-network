import { adminInstance } from '@/instances/admin-instance';
import { baseInstance } from '@/instances/base-instance';
import { IDataForm } from '@/interfaces/modal-form-props.interfaces';
import Endpoints from '@enums/endpoints';
import { CreateSeatProps } from '@interfaces/createSeatProps';

export const SeatsServices = {
  getAdminSeats: async () =>
    adminInstance
      .get(Endpoints.API_SEATS)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  postAdminSeats: async (data: CreateSeatProps) =>
    adminInstance
      .post(Endpoints.API_SEATS, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  deleteAdminSeats: async (id: number) =>
    adminInstance
      .delete(`${Endpoints.API_SEATS}/${id}`)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  getSeatById: async (id: number | string) =>
    baseInstance
      .get(`${Endpoints.API_SEATS}/${id}`)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),

  patchSeatById: async (seat: IDataForm, seatIdFinal: number | string) =>
    adminInstance
      .patch(`${Endpoints.API_SEATS}/${seatIdFinal}`, {
        ...seat,
      })
      .catch(() => {
        throw Error();
      }),
};
