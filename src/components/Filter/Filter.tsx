import React from 'react';
import Input from '../Input/Input';
import { changeFilter } from '../../redux/filter/filterSlice';
import { selectFilterValues } from '../../redux/filter/selectors';
import { useAppSelector, useAppDispatch } from '../../hooks/redux/reduxHooks';
import { IFilterState } from '../../interfaces/filter.interface';
import { INPUT_CONFIG, FILTER_HEADING } from '../../constants/filterConfig';
import css from './Filter.module.css';

const Filter = () => {
  const filterValues = useAppSelector(selectFilterValues);

  const dispatch = useAppDispatch();

  const onChangeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    dispatch(changeFilter({ field: name as keyof IFilterState, value }));
  };

  return (
    <div className={css.filterContainer}>
      <h2 className={css.filterHeading}>{FILTER_HEADING}</h2>
      <ul className={css.filterInputList}>
        {INPUT_CONFIG.map(({ name, placeholder, label }) => (
          <li key={name} className={css.filterInputListItem}>
            <Input
              name={name}
              label={label}
              placeholder={placeholder}
              value={filterValues[name]}
              onChange={onChangeFilter}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
