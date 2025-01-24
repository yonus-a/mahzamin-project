import { CSSProperties } from "react";

export type SelectProps = {
  items: Array<{ name: string; id: string | number }>;
  placeholder?: string;
  style?: CSSProperties;
  defaultValues?: any;
  className?: string;
  errorMsg?: boolean;
  noStyle?: boolean;
  value?: string;
  name: string;
};
