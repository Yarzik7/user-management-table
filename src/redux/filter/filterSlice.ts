import { createSlice } from '@reduxjs/toolkit';
import { IFilterState, IChangeFilterPayload } from '../../interfaces/filter.interface';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: IFilterState = { name: '', username: '', email: '', phone: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter: (state, { payload: { field, value } }: PayloadAction<IChangeFilterPayload>) => {
      state[field] = value;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
