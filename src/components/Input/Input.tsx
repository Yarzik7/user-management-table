import { useId } from 'react';
import { IInputProps } from './interfaces/inputProps.interface';
import css from './Input.module.css';

const Input = ({ name, label, value, placeholder, onChange }: IInputProps) => {
  const inputId = useId();

  return (
    <div className={css.inputContainer}>
      <label htmlFor={inputId} className={css.label}>
        {label}
      </label>
      <input
        id={inputId}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={css.input}
        autoComplete="off"
      />
    </div>
  );
};

export default Input;
