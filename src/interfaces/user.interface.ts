export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface IError {
  status: number;
  message: string;
}
export interface IUsersState {
  users: IUser[];
  isFetching: boolean;
  error: null | IError;
}
