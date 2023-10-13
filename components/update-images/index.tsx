"use client";

import AddBtn from "@components/add-btn";
import PreviewFileInput from "@components/preview-file-input";
import RemoveBtn from "@components/remove-btn";
import { useState } from "react";
import "./style.scss";

export default function UpdateImages({ product, register, watch }: any) {
  const [images, setImages] = useState(product.Image);
  const [imageForRemove, setImageForRemove] = useState<any>([]);
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setImages([...images, { id: 95487265145798, name: "انتخاب تصویر" }]);
  };

  const handleRemove = (id: number) => {
    setImages(images.filter((img: any) => img.id !== id));
    setImageForRemove([
      ...imageForRemove,
      <input
        type="hidden"
        {...register(`removeImages[${count}]`)}
        defaultValue={id}
        key={id}
      />,
    ]);
    setCount(count + 1);
  };

  return (
    <div className="update-image">
      <div className="wrapper">
        <PreviewFileInput
          name="mainImage"
          previewImage={product.image}
          register={register}
          watch={watch}
        />
        <span className="required-symbol">*</span>
      </div>
      {images.map((img: any, idx: number) => (
        <div className="wrapper" key={img.id}>
          <PreviewFileInput
            name={`image[${idx}]`}
            previewImage={img.name}
            imageId={img.id}
            register={register}
            watch={watch}
          />
          <RemoveBtn onClick={() => handleRemove(img.id)} />
        </div>
      ))}
      {imageForRemove}
      <AddBtn onClick={handleAdd} />
    </div>
  );
}
