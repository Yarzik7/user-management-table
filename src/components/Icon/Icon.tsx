import css from './Icon.module.css';

interface IconProps {
  width: number;
  height: number;
  iconName: string;
  className?: string;
}

const Icon = ({ width, height, iconName, className = '' }: IconProps) => {
  return (
    <svg width={width} height={height} className={[css.icon, className].join(' ').trim()}>
      <use xlinkHref={`/icons/icons.svg#icon-${iconName}`} />
    </svg>
  );
};

export default Icon;
