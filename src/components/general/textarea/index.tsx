"use client";

import { useFormContext } from "react-hook-form";
import { TextareaProps } from "./type";
import ErrorMsg from "../error-msg";
import "./styles.scss";

export default function Textarea({ ...props }: TextareaProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error: any = errors[props.name];

  return (
    <label className="labeld-textarea">
      {props.label && <span>{props.label}</span>}
      <textarea
        {...register(props.name)}
        className={`custom-textarea ${props.className || ""}`}
        placeholder={props.placeholder}
        autoFocus={props.autoFocus}
        rows={props.rows}
        cols={props.cols}
      />
      {error && <ErrorMsg>{error.message}</ErrorMsg>}
    </label>
  );
}
