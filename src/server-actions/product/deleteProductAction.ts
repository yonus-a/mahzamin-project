"use server";

import deleteProduct from "@server-actions/product/deleteProduct";

export default async function deleteProductAction(id: number) {
  await deleteProduct(id);
}
