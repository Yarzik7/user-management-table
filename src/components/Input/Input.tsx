import { useId } from 'react';
import { IInputProps } from './interfaces/inputProps.interface';

const Input = ({ name, label, value, placeholder, onChange }: IInputProps) => {
  const inputId = useId();

  return (
    <div>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
