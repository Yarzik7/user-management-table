import { RootState } from '../store';

const selectName = (state: RootState) => state.filter.name;
const selectUsername = (state: RootState) => state.filter.username;
const selectEmail = (state: RootState) => state.filter.email;
const selectPhone = (state: RootState) => state.filter.phone;

const selectFilterValues = (state: RootState) => state.filter;

export { selectName, selectUsername, selectEmail, selectPhone, selectFilterValues };
