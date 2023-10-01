"use client";

import { useState } from "react";
import FileInput from "@components/file-input";
import { nanoid } from "nanoid";
import FormControl from "@components/form-control";
import ErrorMsg from "@components/error-msg";
import "./style.scss";

export default function ImageInputCreator({ register, errors, watch }: any) {
  const [keys, setKeys] = useState([nanoid()]);

  const handleAdd = () => {
    setKeys([...keys, nanoid()]);
  };

  const handleRemove = (key: any) => {
    setKeys(keys.filter((k) => k !== key));
  };

  return (
    <div className="image-input">
      <h2>تصاویر</h2>
      <p>
        توجه داشته باشید که تصوری اول به عنوان تصور اصلی در نظر گرفته خواهد شد !
      </p>
      {keys.map((key, i) => {
        const isLastItem = i >= keys.length - 1;
        const error = errors["images"]?.[i];

        return (
          <FormControl key={key}>
            <FileInput
              name={`images[${i}]`}
              onRemove={() => handleRemove(key)}
              onAdd={handleAdd}
              showAdd={isLastItem}
              register={register}
              watch={watch}
              className={error ? "invalid-input" : ""}
            />
            {error && <ErrorMsg>تصویر نمیتواند خالی باشد</ErrorMsg>}
          </FormControl>
        );
      })}
    </div>
  );
}
