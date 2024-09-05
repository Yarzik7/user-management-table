import { IUsersState, IError } from '../../../../interfaces/user.interface';
import { PayloadAction } from '@reduxjs/toolkit';

export const handleFetchUsersRejected = (state: IUsersState, { payload }: PayloadAction<IError | undefined>) => {
  state.isFetching = false;
  state.error = payload || null;
};
