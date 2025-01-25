"use client";

import FormControl from "../form-control";
import FileInput from "../file-input";
import ErrorMsg from "../error-msg";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./style.scss";

import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  defaultValue?: any;
}

export default function ImageInputCreator({
  defaultValue,
  register,
  errors,
  watch,
}: Props) {
  const [values, setKeys] = useState(defaultValue || [{ id: uuidv4() }]);

  const handleAdd = () => {
    setKeys([...values, { id: uuidv4() }]);
  };

  const handleRemove = (id: any) => {
    setKeys(values.filter((val: any) => val.id !== id));
  };

  return (
    <div className="image-input">
      <h2>تصاویر</h2>
      <p>
        توجه داشته باشید که تصوری اول به عنوان تصور اصلی در نظر گرفته خواهد شد !
      </p>
      {values.map((val: any, i: number) => {
        const isLastItem = i >= values.length - 1;
        // const error = errors["images"]?.[i];

        return (
          <FormControl key={val.id}>
            {/* <FileInput
              name={`images[${i}]`}
              onRemove={() => handleRemove(val.id)}
              onAdd={handleAdd}
              showAdd={isLastItem}
              register={register}
              watch={watch}
              // className={error ? "invalid-input" : ""}
              defaultValue={val.name}
            /> */}
            test
            {/* {error && <ErrorMsg>تصویر نمیتواند خالی باشد</ErrorMsg>} */}
          </FormControl>
        );
      })}
    </div>
  );
}
