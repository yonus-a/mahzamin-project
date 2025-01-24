"use client";

import { useFormContext } from "react-hook-form";
import ErrorMsg from "../error-msg";
import { InputProps } from "./type";
import "./styles.scss";

export default function Input({ errorMsg = true, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  let error: any = errors[props.name];

  const className = `${error ? "invalid-input" : ""} ${
    !props.noStyle ? "custom-input" : ""
  }`;

  return (
    <label className="labeld-input">
      {props.label && <span>{props.label}</span>}
      <input
        {...register(props.name)}
        placeholder={props?.placeholder || ""}
        defaultChecked={props.defaultchcked}
        defaultValue={props.defaultValues}
        autoFocus={props.autoFocus}
        type={props.type || "text"}
        className={className}
        style={props.style}
        list={props.list}
      />
      {error && errorMsg && <ErrorMsg>{error.message}</ErrorMsg>}
    </label>
  );
}
