import React from 'react';
import Icon from '../Icon/Icon';
import css from './Button.module.css';

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  name?: string;
  ariaLabel?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  buttonIconName: string;
  buttonIconSize: number;
}

const Button = ({
  type = 'button',
  name,
  ariaLabel,
  onClick,
  className,
  buttonIconName,
  buttonIconSize,
}: IButtonProps) => {
  return (
    <button
      type={type}
      name={name}
      aria-label={ariaLabel}
      onClick={onClick}
      className={[css.button, className].join(' ').trim()}
    >
      <Icon width={buttonIconSize} height={buttonIconSize} iconName={buttonIconName} />
    </button>
  );
};

export default Button;
