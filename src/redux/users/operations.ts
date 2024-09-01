import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from './usersSlice';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/users';

// export const fetchUsers = createAsyncThunk<User[], undefined>('users/fetchUsers', async (_, thunkAPI) => {});
