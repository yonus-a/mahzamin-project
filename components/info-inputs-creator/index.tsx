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

export default function InfoInputsCreator({
  logos,
  register,
  errors,
  defaultValue,
  unregister,
}: any) {
  const [items, setItems] = useState<any>(defaultValue || []);
  const [removeInfo, setRemoveInfo] = useState<any>([]);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setItems([...items, { id: Math.random() * 100000000000000000 }]);
  };

  const handleRemove = (id: string, registerdIdx: number) => {
    setItems(items.filter((item: any) => item.id !== +id));
    unregister(`info[${registerdIdx}]`);
    setRemoveInfo([
      ...removeInfo,
      <input
        key={id}
        type="hidden"
        {...register(`removeInfo[${count}]`)}
        defaultValue={id}
      />,
    ]);
    setCount(count + 1);
  };

  return (
    <div className="info-input-creator">
      <h2>اطلاعات مختصر</h2>
      {items.map((item: any, i: number) => {
        const error = errors["info"]?.[i];

        return (
          <FormControl key={item.id}>
            <InputWrapper>
              <div className="grid-wrapper">
                <input
                  type="hidden"
                  {...register(`info[${i}][id]`)}
                  defaultValue={item.id}
                />
                <input
                  type="text"
                  defaultValue={item.title}
                  {...register(`info[${i}][title]`, {
                    required: !defaultValue,
                  })}
                  className={error?.title ? "invalid-input" : ""}
                  placeholder="عنوان"
                />
                <input
                  type="text"
                  defaultValue={item.subTitle}
                  {...register(`info[${i}][subTitle]`)}
                  className={error?.subTitle ? "invalid-input" : ""}
                  placeholder="زیر عنوان"
                />
                <LogoSelect
                  items={logos}
                  defaultValue={item.logoId}
                  name={`info[${i}][logo]`}
                  register={register}
                  className={error?.logo ? "invalid-input" : ""}
                />
              </div>
              <RemoveBtn onClick={() => handleRemove(item.id, i)} />
            </InputWrapper>
            {error && <ErrorMsg>اطلاعات مختصر نمیتواند خالی باشد</ErrorMsg>}
          </FormControl>
        );
      })}
      {removeInfo}
      <AddBtn type="button" onClick={handleAdd} />
    </div>
  );
}
