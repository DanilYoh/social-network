import { adminInstance } from '@/instances/admin-instance';
import { clientInstance } from '@/instances/client-instance';
import Endpoints from '@enums/endpoints';
import { IDataForm } from '@/interfaces/modal-form-props.interfaces';
import { PAGE_SIZE } from '@enums/constants';

export const DestinationServices = {
  getAdminDestination: (page = 0) =>
    adminInstance
      .get(Endpoints.API_DESTINATIONS, {
        params: { page, size: PAGE_SIZE },
      })
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),

  postAdminDestination: (data: IDataForm) =>
    adminInstance
      .post(Endpoints.API_DESTINATIONS, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),

  getClientDestination: (page = 0) =>
    clientInstance
      .get(Endpoints.API_DESTINATIONS, {
        params: { page, size: PAGE_SIZE },
      })
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
  patchAdminDestination: (values: IDataForm, id: number) =>
    adminInstance
      .patch(`${Endpoints.API_DESTINATIONS}/${id}`, values)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
};
