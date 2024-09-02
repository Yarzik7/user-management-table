export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface IUsersState {
  users: IUser[];
  isFetching: boolean;
  error: unknown;
}
