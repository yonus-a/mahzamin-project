"use client";

import { useState } from "react";
import InputWrapper from "@components/input-wrapper";
import { nanoid } from "nanoid";
import AddBtn from "@components/add-btn";
import RemoveBtn from "@components/remove-btn";
import LogoSelect from "@components/logo-select";
import "./style.scss";

export default function InfoInputsCreator({ logos }: any) {
  const [keys, setKeys] = useState<any>([nanoid()]);

  const handleAdd = () => {
    setKeys([...keys, nanoid()]);
  };

  const handleRemove = (key: string) => {
    setKeys(keys.filter((k: any) => k !== key));
  };

  return (
    <div className="info-input-creator">
      <h2>اطلاعات مختصر</h2>
      {/* {keys.length <= 0 && <AddBtn type="button" onClick={handleAdd} />} */}
      {keys.map((key: string, i: number) => (
        <InputWrapper key={key}>
          <div className="grid-wrapper">
            <input type="text" name={`info[${i}][title]`} placeholder="عنوان" />
            <input
              type="text"
              name={`info[${i}][subTitle]`}
              placeholder="زیر عنوان"
            />
            <LogoSelect items={logos} name={`info[${i}][logo]`} />
          </div>
          {/* {i >= keys.length - 1 ? (
            <>
              <AddBtn type="button" onClick={handleAdd} />
              <RemoveBtn onClick={() => handleRemove(key)} />
              </>
              ) : (
                <RemoveBtn onClick={() => handleRemove(key)} />
              )} */}
          <RemoveBtn onClick={() => handleRemove(key)} />
        </InputWrapper>
      ))}
      <AddBtn type="button" onClick={handleAdd} />
    </div>
  );
}
