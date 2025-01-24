"use client";

import addBrand from "@server-actions/brand/addBrand";
import CreateForm from "../../commen-form";
import toast from "react-hot-toast";
import { useState } from "react";

export default function AddBrand() {
  const [value, setValue] = useState("");

  const handleClick = async () => {
    try {
      const res = await addBrand({
        name: value,
      });

      if (res.ok) {
        toast.success("برند ایجاد شد");
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
      ariaLabel="create Brand"
    />
  );
}
