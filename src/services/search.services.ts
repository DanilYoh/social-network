import Endpoints from '@enums/endpoints';
import { clientInstance } from '@/instances/client-instance';
import { IFlightData } from '@interfaces/search-form.interfaces';

export const SearchServices = {
  postSearchCreate: async (data: IFlightData) =>
    clientInstance
      .post(Endpoints.API_SEARCH, data)
      .then((response) => response)
      .catch(() => {
        throw Error();
      }),
};

export default SearchServices;
