"use client";

import addCategory from "@server-actions/category/addCategory";
import CreateForm from "../../commen-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddCategory() {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    try {
      const res = await addCategory({
        name: value,
      });

      if (res.ok) {
        toast.success("دسته بندی ایجاد شد");
      } else {
        throw new Error(res.error);
      }
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  return (
    <CreateForm
      setValue={setValue}
      handleClick={handleClick}
      ariaLabel="create Category"
    />
  );
}
