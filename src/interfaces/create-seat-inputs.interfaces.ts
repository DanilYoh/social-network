export interface SeatInputsInterfaces {
  airCraftId: string;
  class: 'BUSINESS' | 'FIRST' | 'PREMIUM' | 'ECONOMY';
  seatNumber: string;
  isLockedBack: 'false' | 'true';

  isNearEmergencyExit: 'false' | 'true';
}
