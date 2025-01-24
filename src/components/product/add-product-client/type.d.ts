import { brand, category, product_color } from "@prisma/client";

export type AddProductType = {
  colors: product_color;
  categories: category;
  brands: brand;
  logos: { id: number; name: string }[];
};
