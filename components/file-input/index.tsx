"use client";

import { useState } from "react";
import InputWrapper from "@components/input-wrapper";
import Button from "@components/button";
import "./style.scss";

interface Props {
  showAdd: boolean;
  onAdd: any;
  name: string;
  onDrop: any;
}

export default function FileInput({ showAdd, onAdd, name, onDrop }: Props) {
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
            <Button type="button" onClick={onAdd}>
              <svg>
                <title>add</title>
                <use href="#add" />
              </svg>
            </Button>
          ) : (
            <Button type="button" onClick={onDrop}>
              <svg>
                <title>drop</title>
                <use href="#delete" />
              </svg>
            </Button>
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
