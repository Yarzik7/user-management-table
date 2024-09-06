export interface IInputProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  type?: string;
  buttonOnClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
