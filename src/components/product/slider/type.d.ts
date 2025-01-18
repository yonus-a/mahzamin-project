import { product } from "@prisma/client";
import React from "react";

export type ProductSliderType = {
  style: React.CSSProperties;
  products: Array<any>;
  title: string;
};
