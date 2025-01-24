import { CSSProperties } from "react";

export interface InputProps {
  style?: CSSProperties;
  placeholder?: string;
  autoFocus?: boolean;
  defaultValues?: any;
  defaultchcked?: any;
  errorMsg?: boolean;
  className?: string;
  noStyle?: boolean;
  label?: string;
  list?: string;
  type?: string;
  name: string;
}
