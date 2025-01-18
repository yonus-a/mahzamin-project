import { product } from "@prisma/client";

export type ProductGridTypes = {
  products: Array<product>;
  title: string;
};
