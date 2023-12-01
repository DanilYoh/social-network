import { IDestinationContent } from './search-form.interfaces';

export interface IDataForm {
  code?: string;
  arrivalDateTime?: string;
  departureDateTime?: string;
  flightStatus?: string;
  aircraftId?: number;
  to?: IDestinationContent | string;
  from?: IDestinationContent | string;
  aircraftNumber?: string;
  model?: string;
  modelYear?: number | undefined;
  flightRange?: number | undefined;
  country?: string;
  city?: string;
  airportName?: string;
  airportCode?: string;
  timezone?: string;
  email?: string;
  passportIssuingCountry?: string;
  confirmPassword?: string;
  airCraftId?: string;
  class?:
    | 'BUSINESS'
    | 'FIRST'
    | 'PREMIUM'
    | 'ECONOMY'
    | 'PREMIUM_ECONONY'
    | string;
  seatNumber?: string;
  isLockedBack?: 'false' | 'true';
  isNearEmergencyExit?: 'false' | 'true';
  seatId?: string | number;
  firstName?: string;
  flightId?: number | string;
  flightSeatId?: number | string;
  lastName?: string;
  passengerId?: number | string;
  ticketNumber?: number | string;
  cityName?: string;
  countryName?: string;
  gmt?: string;
  gmtWinter?: string;
}

export type TCreateOnSubmitHandler = (
  data: IDataForm,
  onSuccess: () => unknown,
  onClose: () => void
) => unknown;

export interface ICreateFormProps {
  onSubmit: TCreateOnSubmitHandler;
  error: Error | null;
  loading: boolean;
  onClose: () => void;
}

export interface IModalFormProps {
  removeItemFromState?: () => void;
  buttonText: string;
  component: React.ElementType;
  onSubmit: TCreateOnSubmitHandler;
  error: Error | null;
  loading: boolean;
}
