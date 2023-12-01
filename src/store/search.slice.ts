import { createSlice } from '@reduxjs/toolkit';

import { IDestination } from '@interfaces/search-form.interfaces';
import { fetchDestinationClient } from '@/store/thunks/destination-client.thunk';
import { fetchSearchCreate } from '@/store/thunks/search.thunk';

interface Search {
  error: boolean;
  loading: boolean;
  searchResult: number | string;
  result: IDestination;
}

const initialState: Search = {
  error: false,
  loading: true,
  searchResult: 0,
  result: {
    content: [
      {
        id: 1,
        airportCode: '',
        airportName: '',
        cityName: '',
        timezone: '',
        countryName: '',
      },
    ],
    totalPages: 0,
  },
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDestinationClient.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.result = payload;
    });
    builder.addCase(fetchDestinationClient.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchDestinationClient.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
    builder.addCase(fetchSearchCreate.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.searchResult = payload;
    });
    builder.addCase(fetchSearchCreate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSearchCreate.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default searchSlice.reducer;
