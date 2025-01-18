"use server";

import createProduct from "@server-actions/product/addProduct";
import uploadFile from "@utils/uploadFile";

export default async function createProductAction(
  data: any,
  formData: FormData
) {
  const images: any = formData.getAll("images");

  data.images = images.map((file: any) => {
    const name = Date.now() + "_" + file.name.replaceAll(" ", "_");

    return {
      name,
      file,
    };
  });

  const result: any = await createProduct(data);

  if (result?.id) {
    data.images.forEach(async ({ name, file }: any) => {
      uploadFile(file, name, "public/images/products");
    });
  }

  return result;
}
