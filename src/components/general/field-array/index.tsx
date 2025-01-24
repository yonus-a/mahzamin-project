"use client";

import InputWrapper from "@components/general/input-wrapper";
import FormControl from "@components/general/form-control";
import RemoveBtn from "@components/general/remove-btn";
import AddBtn from "@components/general/add-btn";
import { useFieldArray } from "react-hook-form";
import "./style.scss";

interface Props {
  name: string;
  title: string;
  children: any;
}

export default function FieldArray({ name, title, children }: Props) {
  const { fields, append, remove } = useFieldArray({
    name,
  });

  return (
    <div className="field-array">
      <h2>{title}</h2>
      {fields.map((item: any, idx: number) => {
        return (
          <FormControl key={item.id}>
            <InputWrapper>
              <div className="grid-wrapper">{children(idx)}</div>
              <RemoveBtn onClick={() => remove(idx)} />
            </InputWrapper>
          </FormControl>
        );
      })}
      <AddBtn type="button" onClick={() => append({})} />
    </div>
  );
}
