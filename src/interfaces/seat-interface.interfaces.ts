export interface SeatInterfaceContent {
  aircraftId: number;
  category: {
    categoryType: string;
    id: number;
  };
  id: number;
  isLockedBack: boolean;
  isNearEmergencyExit: boolean;
  seatNumber: string;
}

export interface SeatInterface {
  content: SeatInterfaceContent[];
}
