"use client";

import { useState } from "react";
import FileInput from "@components/file-input";
import "./style.scss";

export default function ImageInputCreator() {
  const [count, setCount] = useState<number>(1);

  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleDrop = (idx: any) => {
    setCount(count - 1);
  };

  return (
    <div className="image-input">
      <h2>تصاویر</h2>
      <p>
        توجه داشته باشید که تصوری اول به عنوان تصور اصلی در نظر گرفته خواهد شد !
      </p>
      {Array.from({ length: count }, (_, i) => {
        const isLastItem = i >= count - 1;
        const isFirstItem = i === 0;

        return (
          <FileInput
            key={i}
            name={isFirstItem ? "mainImage" : "images[]"}
            onDrop={handleDrop}
            onAdd={handleAdd}
            showAdd={isLastItem}
          />
        );
      })}
    </div>
  );
}
