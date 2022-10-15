export declare interface IDropdownOptionsProps {
  value: string | number;
  text: string;
};

export interface IDropdownProps {
  maxWidth?: string | number;
  disabled?: boolean;
  options: IDropdownOptionsProps[];
  label?: string;
};

