"use server";

import updateProduct from "@server-actions/product/updateProduct";
import uniqueFilename from "@utils/uniqueFilename";
import uploadFile from "@utils/uploadFile";
import { parseFormData } from "parse-nested-form-data";

export default async function updateProductAction(
  data: any,
  formData: FormData
) {
  const { mainImage, images }: any = parseFormData(formData);

  if (mainImage) {
    data.mainImage = uniqueFilename(mainImage, mainImage.name);
  }

  if (images) {
    data.images = images.map((img: any) => {
      img.name = Date.now() + "_" + img.file.name.replaceAll(" ", "_");
      return img;
    });
  }

  const result = await updateProduct(data);

  if (result.id) {
    const allImages = [mainImage, ...(images || [])];

    allImages.forEach((img) => {
      if (img) {
        uploadFile(img.file, img.name, "public/images/products");
      }
    });
  }

  return {};
}
