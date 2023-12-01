export interface CreateSeatProps {
  aircraftId: string;
  category: {
    categoryType: string;
  };
  isLockedBack: boolean;
  isNearEmergencyExit: boolean;
  seatNumber: string;
  seatId?: number;
}
