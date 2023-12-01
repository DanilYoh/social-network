import { clientInstance } from '@/instances/client-instance';
import { adminInstance } from '@/instances/admin-instance';
import { IAircraftData } from '@interfaces/aircraft-data.interfaces';
import { IDataForm } from '@interfaces/modal-form-props.interfaces';
import Endpoints from '@enums/endpoints';
import { PAGE_SIZE } from '@enums/constants';

export const AircraftServices = {
  getClientAircraft: (page = 0) =>
    clientInstance
      .get<IAircraftData>(Endpoints.API_AIRCRAFTS, {
        params: { page, size: PAGE_SIZE },
      })
      .then((response) => response.data)
      .catch(() => {
        throw Error();
      }),
  postAdminAircraft: (data: IDataForm) =>
    adminInstance
      .post(Endpoints.API_AIRCRAFTS, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  patchAdminAircraft: (data: IDataForm, id: number) =>
    adminInstance
      .patch(`${Endpoints.API_AIRCRAFTS}/${id}`, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  deleteAdminAircraft: (id: number) =>
    adminInstance
      .delete<string>(`${Endpoints.API_AIRCRAFTS}/${id}`)
      .then((response) => response.data)
      .catch(() => {
        throw Error();
      }),
};
