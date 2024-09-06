import { useId } from 'react';
import { IInputProps } from './interfaces/inputProps.interface';

import Button from '../Button/Button';
import css from './Input.module.css';

const Input = ({ name, label, value, placeholder, onChange, buttonOnClick }: IInputProps) => {
  const inputId = useId();

  return (
    <div className={css.inputContainer}>
      <label htmlFor={inputId} className={css.label}>
        {label}
      </label>
      <div className={css.inputFlexBox}>
        <input
          id={inputId}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={css.input}
          autoComplete="off"
        />
        <Button
          name={name}
          buttonIconSize={24}
          buttonIconName="clean"
          ariaLabel={`Clean ${name} filter`}
          onClick={buttonOnClick}
          className={css.clearFilterButton}
        />
      </div>
    </div>
  );
};

export default Input;
