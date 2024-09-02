import React from 'react';
import Input from '../Input/Input';
import { changeFilter } from '../../redux/filter/filterSlice';
import { selectFilterValues } from '../../redux/filter/selectors';
import { useAppSelector, useAppDispatch } from '../../hooks/redux/reduxHooks';
import { IFilterState } from '../../interfaces/filter.interface';

const Filter = () => {
  const { name, username, email, phone } = useAppSelector(selectFilterValues);

  const dispatch = useAppDispatch();

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch(changeFilter({ field: name as keyof IFilterState, value }));
  };

  return (
    <div>
      <Input name="name" label="Name" placeholder="Name" value={name} onChange={onChangeFilter} />
      <Input name="username" label="Username" placeholder="Username" value={username} onChange={onChangeFilter} />
      <Input name="email" label="Email" placeholder="Email" value={email} onChange={onChangeFilter} />
      <Input name="phone" label="Phone" placeholder="Phone" value={phone} onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;
