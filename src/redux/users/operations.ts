import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser, IError } from '../../interfaces/user.interface';
import { BASE_URL, USER_ENDPOINT } from '../../constants/api';

axios.defaults.baseURL = BASE_URL;

export const fetchUsers = createAsyncThunk<IUser[], void, { rejectValue: IError }>(
  'users/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(USER_ENDPOINT);
      return response.data;
    } catch (e: any) {
      const { status, message } = e.toJSON();
      return thunkAPI.rejectWithValue({ status, message });
    }
  }
);
