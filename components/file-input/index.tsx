"use client";

import { useState } from "react";
import InputWrapper from "@components/input-wrapper";
import AddBtn from "@components/add-btn";
import RemoveBtn from "@components/remove-btn";
import "./style.scss";

interface Props {
  showAdd: boolean;
  onAdd: any;
  name: string;
  onRemove: any;
}

export default function FileInput({ showAdd, onAdd, name, onRemove }: Props) {
  const [value, setValue] = useState("");

  const handleChange = ({ target }: any) => {
    const filename = target.value.split("\\").pop();
    setValue(filename);
  };

  return (
    <>
      <div className="file-input">
        <InputWrapper>
          {showAdd ? (
            <AddBtn onClick={onAdd} />
          ) : (
            <RemoveBtn onClick={onRemove} />
          )}
          <div className="grid-wrapper">
            <label>
              انتخاب تصویر
              <input
                type="file"
                name={name}
                accept="image/*"
                multiple
                onChange={handleChange}
              />
            </label>
            {value}
          </div>
          {name === "mainImage" ? "*" : ""}
        </InputWrapper>
      </div>
    </>
  );
}
