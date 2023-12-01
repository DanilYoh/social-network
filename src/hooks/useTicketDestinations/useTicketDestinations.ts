import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@hooks/index';
import { fetchDestinationAdmin } from '@/store/thunks/destination-admin.thunk';
import { IUseOptions } from '@interfaces/use-select-options.interfaces';

type UseTicketDestinations = IUseOptions;

export const useTicketDestinations = (): UseTicketDestinations => {
  const dispatch = useAppDispatch();
  const { destinations, isLoading } = useAppSelector(
    (state) => state.destination
  );
  useEffect(() => {
    dispatch(fetchDestinationAdmin()).catch((err: Error) => err);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const options = destinations.content.map((e) => ({
    value: e.airportCode,
    label: e.cityName,
  }));
  return { options, isLoading };
};
