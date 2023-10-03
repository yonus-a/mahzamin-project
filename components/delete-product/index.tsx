"use client";

import Button from "@components/button";
import { useState } from "react";
import Confrom from "@components/conform";
import deleteProduct from "@server-actions/deleteProductAction";
import { useRouter } from "next/navigation";
import "./style.scss";

export default function DeleteProduct({ id }: { id: number }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleConform = async () => {
    await deleteProduct(id);
    setOpen(false);
    router.refresh();
  };

  return (
    <>
      <Confrom
        onCancel={() => setOpen(false)}
        onConform={handleConform}
        show={open}
        msg="ایا مطمعن هستید ؟"
      />
      <Button onClick={() => setOpen(true)}>خذف کردن</Button>
    </>
  );
}
