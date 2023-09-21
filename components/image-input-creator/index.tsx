"use client";

import { useState } from "react";
import FileInput from "@components/file-input";
import { nanoid } from "nanoid";
import "./style.scss";

export default function ImageInputCreator() {
  const [keys, setKeys] = useState([nanoid()]);

  const handleAdd = () => {
    setKeys([...keys, nanoid()]);
  };

  const handleDrop = (key: any) => {
    setKeys(keys.filter((k) => k !== key));
  };

  return (
    <div className="image-input">
      <h2>تصاویر</h2>
      <p>
        توجه داشته باشید که تصوری اول به عنوان تصور اصلی در نظر گرفته خواهد شد !
      </p>
      {keys.map((key, i) => {
        const isLastItem = i >= keys.length - 1;
        const isFirstItem = i === 0;

        return (
          <FileInput
            key={key}
            name={isFirstItem ? "mainImage" : "images[]"}
            onDrop={() => handleDrop(key)}
            onAdd={handleAdd}
            showAdd={isLastItem}
          />
        );
      })}
    </div>
  );
}
