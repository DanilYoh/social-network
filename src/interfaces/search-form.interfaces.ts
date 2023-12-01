export interface IDestinationContent {
  id: number;
  airportCode: string;
  airportName: string;
  cityName: string;
  timezone: string;
  countryName: string;
}

export interface IDestination {
  content: IDestinationContent[];
  totalPages: number;
}

export interface ISearchForm {
  onSearchSubmit: () => void;
}

export interface IInputDate {
  id?: string;
  value: Date | undefined;
  setValue: (field: string, value: unknown) => unknown;
  fieldHasError: boolean;
  label: string;
}

export interface ISelectDestination {
  id: string;
  value: IDestinationContent | string;
  setValue: (field: string, value: unknown) => unknown;
  fieldHasError: boolean;
  label: string;
  options: IDestinationContent[];
}

export interface ISearchFormik {
  flightType: string;
  from: IDestinationContent | string;
  to: IDestinationContent | string;
  departure: Date | undefined;
  return: Date | undefined;
  passengers: string;
  directFlight: boolean;
}

export interface IFlightData {
  departureDate: string;
  from: IDestinationContent | string;
  numberOfPassengers: string;
  returnDate: string;
  to: IDestinationContent | string;
}

export interface IFlightContent {
  aircraftId: number;
  airportFrom: string;
  airportTo: string;
  arrivalDateTime: string;
  code: string;
  departureDateTime: string;
  flightStatus: string;
  id: number;
}

export interface IFlight {
  content: IFlightContent[];
  totalPages: number;
}
