import { filterType } from "@/types/filterType";
import { Prisma } from "@prisma/client";

export interface filterProductsType
  extends filterType,
    Prisma.productFindManyArgs {}
