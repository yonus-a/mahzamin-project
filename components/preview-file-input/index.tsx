import { useEffect, useState } from "react";
import Image from "next/image";
import "./style.scss";

export default function PreviewFileInput({
  name,
  previewImage,
  register,
  watch,
  imageId,
}: any) {
  const selectedFile = watch(name + ".file")?.[0];
  const imageName = previewImage || selectedFile?.name;
  const [preview, setPreview] = useState(`/images/products/${imageName}`);

  useEffect(() => {
    if (selectedFile) {
      const objectUrl = URL.createObjectURL(selectedFile);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [selectedFile]);
  console.log(imageName);

  return (
    <label className="preview-file-input">
      <Image src={preview} width={80} height={60} alt="" />
      {imageName}
      <input type="file" {...register(name + ".file")} />
      <input type="hidden" {...register(name + ".id")} value={imageId} />
    </label>
  );
}
