"use server";

import deleteProduct from "@prisma-actions/deleteProduct";

export default async function deleteProductAction(id: number) {
  await deleteProduct(id);
}
