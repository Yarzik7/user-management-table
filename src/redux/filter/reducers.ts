import { PayloadAction } from '@reduxjs/toolkit';
import { IChangeFilterPayload, IFilterState } from '../../interfaces/filter.interface';

const changeFilterReducer = (
  state: IFilterState,
  { payload: { field, value } }: PayloadAction<IChangeFilterPayload>
) => {
  if (field === 'all') {
    Object.keys(state).forEach(key => {
      state[key as keyof IFilterState] = value;
    });
  } else {
    state[field] = value;
  }
};

export { changeFilterReducer };
