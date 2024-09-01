import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type User = {
  id: number;
  name: string;
  username: string;
  phone: string;
};

// type Users = Array<User>;

type UsersState = {
  users: User[];
  isLoading: boolean;
  error: any;
};

const initialState: UsersState = { users: [], isLoading: false, error: null };

const usersSlice = createSlice({ name: 'users', initialState, reducers: {} });

export const usersReducer = usersSlice.reducer;
