export interface IAircraftDataContent {
  id: number;
  aircraftNumber: string;
  model: string;
  modelYear: number;
  flightRange: number;
}

export interface IAircraftData {
  content: IAircraftDataContent[];
}
