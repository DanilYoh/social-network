import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-cycle
import { fetchDestinationAdmin } from '@/store/thunks/destination-admin.thunk';
import {
  IDestination,
  IDestinationContent,
} from '@/interfaces/search-form.interfaces';

interface DestinationState {
  destinations: IDestination;
  destination: IDestinationContent | null;
  isLoading: boolean;
  error: string;
  isOpenModal: boolean;
}

const initialState: DestinationState = {
  destinations: {
    content: [],
    totalPages: 0,
  },
  destination: null,
  isLoading: false,
  error: '',
  isOpenModal: false,
};
export const destinationAdminSlice = createSlice({
  name: 'destinationAdmin',
  initialState,
  reducers: {
    clickDestinationModal: (state) => {
      state.isOpenModal = !state.isOpenModal;
    },
    setDestinationData: (
      state,
      action: PayloadAction<IDestinationContent | null>
    ) => {
      state.destination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDestinationAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchDestinationAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = '';
      state.destinations = payload;
    });
    builder.addCase(
      fetchDestinationAdmin.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { clickDestinationModal, setDestinationData } =
  destinationAdminSlice.actions;

export default destinationAdminSlice.reducer;
