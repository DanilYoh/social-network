import { adminInstance } from '@/instances/admin-instance';
import { ITimeZones } from '@/interfaces/admin-time-zones.interfaces';
import { IDataForm } from '@/interfaces/user-modal-timezones.interfaces';
import { PAGE_SIZE } from '@/enums/constants';
import Endpoints from '@/enums/endpoints';

export const TimeZonesServices = {
  getTimeZones: (page = 0) =>
    adminInstance
      .get<{ content: ITimeZones[] }>(Endpoints.API_TIMEZONES, {
        params: { page, size: PAGE_SIZE },
      })
      .then((response) => response)
      .catch(() => {
        throw new Error();
      }),

  postTimeZone: (data: IDataForm) => {
    adminInstance
      .post(Endpoints.API_TIMEZONES, data)
      .then((response) => response)
      .catch(() => {
        throw new Error();
      });
  },

  deleteTimeZone: (id: number) =>
    adminInstance
      .delete<string>(`${Endpoints.API_TIMEZONES}/${id}`)
      .then((response) => response.data)
      .catch(() => {
        throw new Error();
      }),

  patchAdminTimeZone: (data: IDataForm, id: number) =>
    adminInstance
      .patch(`${Endpoints.API_TIMEZONES}/${id}`, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
};
