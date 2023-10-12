"use client";

import InputWrapper from "@components/input-wrapper";
import FormControl from "@components/form-control";
import RemoveBtn from "@components/remove-btn";
import ErrorMsg from "@components/error-msg";
import AddBtn from "@components/add-btn";
import { useState } from "react";
import "./style.scss";

export default function DetailsInputsCreator({
  defaultValue,
  register,
  errors,
  unregister,
}: any) {
  const [items, setItems] = useState<any>(defaultValue || []);
  const [removeDetails, setRemoveDetails] = useState<any>([]);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setItems([...items, { id: Math.random() * 100000000000000000 }]);
  };

  const handleRemove = (id: string, registerdIdx: number) => {
    setItems(items.filter((item: any) => item.id !== +id));
    unregister(`details[${registerdIdx}]`);
    setRemoveDetails([
      ...removeDetails,
      <input
        key={id}
        type="hidden"
        {...register(`removeDetails[${count}]`)}
        defaultValue={id}
      />,
    ]);
    setCount(count + 1);
  };

  return (
    <div className="details-inputs-creator">
      <h2>اطلاعات تکمیلی</h2>
      {items.map((item: any, i: number) => {
        const error = errors["details"]?.[i];

        return (
          <FormControl key={item.id}>
            <InputWrapper>
              <div className="grid-wrapper">
                <input
                  type="hidden"
                  {...register(`details[${i}][id]`)}
                  defaultValue={item.id}
                />
                <input
                  type="text"
                  placeholder="عبارت"
                  defaultValue={item.term}
                  {...register(`details[${i}][term]`, { required: true })}
                  className={error?.term ? "invalid-input" : ""}
                />
                <input
                  type="text"
                  placeholder="تعریف"
                  defaultValue={item.definition}
                  {...register(`details[${i}][definition]`, { required: true })}
                  className={error?.definition ? "invalid-input" : ""}
                />
              </div>
              <RemoveBtn onClick={() => handleRemove(item.id, i)} />
            </InputWrapper>
            {error && <ErrorMsg>اتلاعات تکمیلی نمیتواند خالی باشد</ErrorMsg>}
          </FormControl>
        );
      })}
      {removeDetails}
      <AddBtn type="button" onClick={handleAdd} />
    </div>
  );
}
