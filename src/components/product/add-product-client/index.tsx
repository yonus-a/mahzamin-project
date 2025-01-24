"use client";

import { useForm } from "react-hook-form";
import ProductForm from "../product-form";
import { AddProductType } from "./type";

export default function AddProductClient(props: AddProductType) {
  const methods = useForm();

  const onSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (e) {}
  };

  return <ProductForm {...props} methods={methods} onSubmit={onSubmit} />;
}
