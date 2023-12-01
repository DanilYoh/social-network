import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UsersFetch } from '@/store/thunks/passengers.thunk';
import { IUser } from '@interfaces/users.interfaces';

interface UsersState {
  users: IUser[];
  user: null | IUser;
  isLoading: boolean;
  error: string;
  isClick: boolean;
  totalPages: number;
}

const initialState: UsersState = {
  users: [],
  user: null,
  isLoading: false,
  error: '',
  isClick: false,
  totalPages: 0,
};

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clickModalUsersButton(state) {
      state.isClick = !state.isClick;
    },
    userData(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(UsersFetch.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      UsersFetch.fulfilled.type,
      (
        state,
        action: PayloadAction<{ content: IUser[]; totalPages: number }>
      ) => {
        state.isLoading = false;
        state.error = '';
        state.users = [...action.payload.content];
        state.totalPages = action.payload.totalPages;
      }
    );
    builder.addCase(
      UsersFetch.rejected.type,
      (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    );
  },
});

export const { userData, clickModalUsersButton } = usersSlice.actions;

export default usersSlice.reducer;
