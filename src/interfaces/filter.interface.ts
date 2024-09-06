export interface IFilterState {
  name: string;
  username: string;
  email: string;
  phone: string;
}

export interface IChangeFilterPayload {
  field: keyof IFilterState | 'all';
  value: string;
}
