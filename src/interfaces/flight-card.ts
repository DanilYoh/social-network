export type TCategory = {
  categoryType: string;
  id: number;
};

export type TSeatSet = {
  category: TCategory;
  id: number;
  isLockedBack: boolean;
  isNearEmergencyExit: boolean;
  seatNumber: string;
  price: number;
};

type TAircraftData = {
  aircraftNumber: string;
  flightRange: number;
  id: number;
  model: string;
  modelYear: number;
  seatSet: TSeatSet[];
};

type TDirection = {
  airportCode: string;
  airportName: string;
  cityName: string;
  countryName: string;
  id: number;
  timezone: string;
};

export interface IFlightCardData {
  id: number;
  aircraft: TAircraftData;
  arrivalDateTime: string;
  code: string;
  departureDateTime: string;
  flightStatus: string;
  from: TDirection;
  to: TDirection;
}

export interface IFlightCard {
  data: IFlightCardData;
}
