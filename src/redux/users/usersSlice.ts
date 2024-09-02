import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';
import { IUsersState } from '../../interfaces/user.interface';
import * as usersReducers from '../../utils/reduxActionHandlers/usersActionHandlers';

const initialState: IUsersState = { users: [], isFetching: false, error: null };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.pending, usersReducers.handleFetchUsersPending)
      .addCase(fetchUsers.fulfilled, usersReducers.handleFetchUsersFulfilled),
});

export const usersReducer = usersSlice.reducer;
