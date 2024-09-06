import { createSlice } from '@reduxjs/toolkit';
import { IFilterState } from '../../interfaces/filter.interface';
import { changeFilterReducer } from './reducers';

const initialState: IFilterState = { name: '', username: '', email: '', phone: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: changeFilterReducer,
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
