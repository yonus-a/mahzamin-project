"use client";

import { useState } from "react";
import InputWrapper from "@components/input-wrapper";
import { nanoid } from "nanoid";
import AddBtn from "@components/add-btn";
import RemoveBtn from "@components/remove-btn";
import LogoSelect from "@components/logo-select";
import FormControl from "@components/form-control";
import ErrorMsg from "@components/error-msg";
import "./style.scss";

export default function InfoInputsCreator({ logos, register, errors }: any) {
  const [keys, setKeys] = useState<any>([]);

  const handleAdd = () => {
    setKeys([...keys, nanoid()]);
  };

  const handleRemove = (key: string) => {
    setKeys(keys.filter((k: any) => k !== key));
  };

  return (
    <div className="info-input-creator">
      <h2>اطلاعات مختصر</h2>
      {keys.map((key: string, i: number) => {
        const error = errors["info"]?.[i];

        return (
          <FormControl key={key}>
            <InputWrapper>
              <div className="grid-wrapper">
                <input
                  type="text"
                  {...register(`info[${i}][title]`, { required: true })}
                  className={error?.title ? "invalid-input" : ""}
                  placeholder="عنوان"
                />
                <input
                  type="text"
                  {...register(`info[${i}][subTitle]`)}
                  className={error?.subTitle ? "invalid-input" : ""}
                  placeholder="زیر عنوان"
                />
                <LogoSelect
                  items={logos}
                  name={`info[${i}][logo]`}
                  register={register}
                  className={error?.logo ? "invalid-input" : ""}
                />
              </div>
              <RemoveBtn onClick={() => handleRemove(key)} />
            </InputWrapper>
            {error && <ErrorMsg>اطلاعات مختصر نمیتواند خالی باشد</ErrorMsg>}
          </FormControl>
        );
      })}
      <AddBtn type="button" onClick={handleAdd} />
    </div>
  );
}
