import { IDestinationContent } from '@interfaces/search-form.interfaces';

export const getCityFromAirport = (
  code: string,
  destinations: IDestinationContent[]
): string | undefined => {
  const target = destinations.find((item) => item.airportCode === code);
  if (target) return target.cityName;
};
