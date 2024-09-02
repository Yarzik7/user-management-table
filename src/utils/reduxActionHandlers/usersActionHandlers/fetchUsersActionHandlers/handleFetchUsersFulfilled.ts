import { IUsersState, IUser } from '../../../../interfaces/user.interface';
import { PayloadAction } from '@reduxjs/toolkit';

export const handleFetchUsersFulfilled = (state: IUsersState, { payload }: PayloadAction<IUser[]>) => {
  state.isFetching = false;
  state.error = null;
  state.users = payload;
};
