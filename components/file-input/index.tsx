"use client";

import InputWrapper from "@components/input-wrapper";
import AddBtn from "@components/add-btn";
import RemoveBtn from "@components/remove-btn";
import "./style.scss";

interface Props {
  showAdd: boolean;
  onAdd: any;
  name: string;
  onRemove: any;
  register: any;
  watch: any;
  className: string;
}

export default function FileInput({
  showAdd,
  onAdd,
  name,
  onRemove,
  register,
  watch,
  className,
}: Props) {
  const filename = watch(name)?.[0]?.name;
  const classnames = "file-input " + (className || "");

  return (
    <InputWrapper className={classnames}>
      {showAdd ? <AddBtn onClick={onAdd} /> : <RemoveBtn onClick={onRemove} />}
      <div className="grid-wrapper">
        <label>
          انتخاب تصویر
          <input
            {...register(name, { required: true })}
            type="file"
            accept="image/*"
          />
        </label>
        {filename && (
          <span title={filename} className="filename">
            {filename}
          </span>
        )}
      </div>
      {name === "images[0]" ? "*" : ""}
    </InputWrapper>
  );
}
