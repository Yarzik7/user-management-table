import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';
import { selectFilterValues } from '../filter/selectors';
import { IUser } from '../../interfaces/user.interface';

const selectUsers = (state: RootState): IUser[] => state.users.users;
const selectIsFetching = (state: RootState): boolean => state.users.isFetching;
const selectError = (state: RootState) => state.users.error;

const selectVisibleUsers = createSelector([selectFilterValues, selectUsers], (filter, users) =>
  users.filter(user =>
    Object.entries(filter).every(
      ([field, value]) =>
        !(value && !(user[field as keyof typeof user] as string).toLowerCase().includes(value.toLowerCase()))
    )
  )
);

export { selectUsers, selectIsFetching, selectError, selectVisibleUsers };
