import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/redux/reduxHooks';

import { changeFilter } from '../../redux/filter/filterSlice';
import { selectFilterValues } from '../../redux/filter/selectors';

import Input from '../Input/Input';
// import Icon from '../Icon/Icon';
import Button from '../Button/Button';
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

  const onClearFilter = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const { name } = e.currentTarget;
    dispatch(changeFilter({ field: name as keyof IFilterState | 'all', value: '' }));
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
              buttonOnClick={onClearFilter}
            />
          </li>
        ))}
      </ul>
      <Button
        name="all"
        buttonIconSize={26}
        buttonIconName="clean"
        ariaLabel="Clean filter"
        onClick={onClearFilter}
        className={css.clearFilterButton}
      />
    </div>
  );
};

export default Filter;
