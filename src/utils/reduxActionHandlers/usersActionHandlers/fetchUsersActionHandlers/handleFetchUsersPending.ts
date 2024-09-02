import { IUsersState } from '../../../../interfaces/user.interface';

export const handleFetchUsersPending = (state: IUsersState) => {
  state.isFetching = true;
  state.error = null;
};
