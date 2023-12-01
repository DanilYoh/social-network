import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  SeatInterface,
  SeatInterfaceContent,
} from '@interfaces/seat-interface.interfaces';
import {
  GetAircraftSeatsServices,
  CreateSeatServices,
  DeleteSeatServices,
  PatchSeatServices,
  GetSeatById,
} from '@/store/thunks/seat.thunk';

interface IState {
  seats: SeatInterface;
  loading: boolean;
  id: string;
  editMode: boolean;
  submitEdit: boolean;
}
interface IPatchProp {
  finalObj: SeatInterfaceContent;
  seatId: number;
}

const initialState: IState = {
  seats: {
    content: [],
  },
  loading: false,
  id: '',
  editMode: false,
  submitEdit: false,
};

export const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    setEditModeTrue(state) {
      state.editMode = true;
    },
    setEditModeFalse(state) {
      state.editMode = false;
    },
    setSubmitEditTrue(state) {
      state.submitEdit = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetSeatById.fulfilled, (state, action) => {
      state.id = action.payload;
    });

    builder.addCase(GetAircraftSeatsServices.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      GetAircraftSeatsServices.fulfilled,
      (state, action: PayloadAction<SeatInterface>) => {
        state.seats = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(CreateSeatServices.fulfilled, (state, { payload }) => {
      state.seats.content.push(payload);
    });
    builder.addCase(DeleteSeatServices.fulfilled, (state, { payload }) => {
      const removeId = state.seats.content.findIndex((el) => el.id === payload);
      state.seats.content.splice(removeId, 1);
    });
    builder.addCase(
      PatchSeatServices.fulfilled.type,
      (state, action: PayloadAction<IPatchProp>) => {
        const newSeat = state.seats.content.find(
          (el) => el.id === action.payload.seatId
        );
        if (newSeat) {
          newSeat.aircraftId = action.payload.finalObj.aircraftId;
          newSeat.isLockedBack = action.payload.finalObj.isLockedBack;
          newSeat.isNearEmergencyExit =
            action.payload.finalObj.isNearEmergencyExit;
          newSeat.category.categoryType =
            action.payload.finalObj.category.categoryType;
          newSeat.seatNumber = action.payload.finalObj.seatNumber;
        }
      }
    );
  },
});

export const { setEditModeTrue, setEditModeFalse, setSubmitEditTrue } =
  seatsSlice.actions;
export default seatsSlice.reducer;
