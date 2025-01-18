"use client";

import InputWrapper from "@components/general/input-wrapper";
import AddBtn from "@components/general/add-btn";
import RemoveBtn from "@components/general/remove-btn";
import "./style.scss";

interface Props {
  showAdd: boolean;
  onAdd: any;
  name: string;
  onRemove: any;
  register: any;
  watch: any;
  className: string;
  defaultValue: any;
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
