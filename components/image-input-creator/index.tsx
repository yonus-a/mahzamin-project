"use client";

import { useState } from "react";
import FileInput from "@components/file-input";
import FormControl from "@components/form-control";
import ErrorMsg from "@components/error-msg";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

export default function ImageInputCreator({
  register,
  errors,
  watch,
  defaultValue,
}: any) {
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
        const error = errors["images"]?.[i];

        return (
          <FormControl key={val.id}>
            <FileInput
              name={`images[${i}]`}
              onRemove={() => handleRemove(val.id)}
              onAdd={handleAdd}
              showAdd={isLastItem}
              register={register}
              watch={watch}
              className={error ? "invalid-input" : ""}
              defaultValue={val.name}
            />
            {error && <ErrorMsg>تصویر نمیتواند خالی باشد</ErrorMsg>}
          </FormControl>
        );
      })}
    </div>
  );
}
