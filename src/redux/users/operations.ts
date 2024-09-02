import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../interfaces/user.interface';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = createAsyncThunk<IUser[], void>('users/fetchUsers', async () => {
  const response = await axios.get<IUser[]>('/users');
  return response.data;
});
