import { IUser } from "../../../../interfaces/user.interface";

export interface IUserRowProps extends Omit<IUser, 'id'> {}