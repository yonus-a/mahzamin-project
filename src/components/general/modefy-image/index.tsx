"use client";

import Image from "next/image";
import Button from "@components/general/button";
import { useState } from "react";
import FileInput from "@components/general/file-input";

export default function ModefyImage({ image, register, name }: any) {
  const [showFileInput, setShowFileInput] = useState(false);

  return (
    <>
      {showFileInput ? (
        <></>
      ) : (
        <div className="modefy-image">
          <Image
            src={`/images/products/${image}`}
            width={100}
            height={100}
            alt=""
          />
          <input type="hidden" defaultValue={image} {...register(name)} />
          {image}
          <Button onClick={() => setShowFileInput(true)}>ویرایش</Button>
        </div>
      )}
    </>
  );
}
