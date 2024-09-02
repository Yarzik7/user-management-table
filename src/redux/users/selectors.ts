import { RootState } from '../store';

const selectUsers = (state: RootState) => state.users.users;

export { selectUsers };
