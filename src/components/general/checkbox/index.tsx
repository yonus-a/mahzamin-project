"use client";

import { useFormContext } from "react-hook-form";
import { InputProps } from "./type";
import ErrorMsg from "../error-msg";
import "./styles.scss";

export default function Checkbox({ ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error: any = errors[props.name];

  return (
    <label className="labeld-checkbox">
      <input
        {...register(props.name)}
        className={`custom-checkbox ${props.className || ""}`}
        autoFocus={props.autoFocus}
        type={props.type || "checkbox"}
        value={props.value}
      />
      {props.label && <span>{props.label}</span>}
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
    </label>
  );
}
