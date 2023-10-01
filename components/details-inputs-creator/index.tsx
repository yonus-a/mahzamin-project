"use client";

import InputWrapper from "@components/input-wrapper";
import { useState } from "react";
import { nanoid } from "nanoid";
import RemoveBtn from "@components/remove-btn";
import AddBtn from "@components/add-btn";
import "./style.scss";
import FormControl from "@components/form-control";
import ErrorMsg from "@components/error-msg";

export default function DetailsInputsCreator({ register, errors }: any) {
  const [keys, setKeys] = useState<any>([]);

  const handleAdd = () => {
    setKeys([...keys, nanoid()]);
  };

  const handleRemove = (key: string) => {
    setKeys(keys.filter((k: any) => k !== key));
  };

  return (
    <div className="details-inputs-creator">
      <h2>اطلاعات تکمیلی</h2>
      {keys.map((key: string, i: number) => {
        const error = errors["details"]?.[i];

        return (
          <FormControl key={key}>
            <InputWrapper>
              <div className="grid-wrapper">
                <input
                  type="text"
                  placeholder="عبارت"
                  {...register(`details[${i}][term]`, { required: true })}
                  className={error?.term ? "invalid-input" : ""}
                />
                <input
                  type="text"
                  placeholder="تعریف"
                  {...register(`details[${i}][definition]`, { required: true })}
                  className={error?.definition ? "invalid-input" : ""}
                />
              </div>
              <RemoveBtn onClick={() => handleRemove(key)} />
            </InputWrapper>
            {error && <ErrorMsg>اتلاعات تکمیلی نمیتواند خالی باشد</ErrorMsg>}
          </FormControl>
        );
      })}
      <AddBtn type="button" onClick={handleAdd} />
    </div>
  );
}
5;
