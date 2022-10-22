export declare interface IDropdownOptionsProps {
  value: string | null;
  text: string | null;
};

export interface IDropdownProps {
  maxWidth?: string | number;
  disabled?: boolean;
  options: IDropdownOptionsProps[];
  label?: string;
  defaultValue?: string;
  placeholder?: string;
  storeFunction: (value: string | null) => void;
};

