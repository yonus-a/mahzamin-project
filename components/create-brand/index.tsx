"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CreateForm from "@components/create-form";
import fetchPost from "@utils/fetchPost";

export default function CreateBrand() {
  const [value, setValue] = useState();
  const [closeDialog, setCloseDialog] = useState(false);
  const [errMsg, setErrMsg] = useState<any>(null);
  const router = useRouter();

  const handleChange = ({ target }: any) => {
    setValue(target.value);
  };

  const handleClick = async () => {
    setCloseDialog(false);

    const res = await fetchPost("http://localhost:3000/api/createBrand", {
      name: value,
    });

    if (res.status === 409) {
      setErrMsg("برند در حال حاضر وجود دارد !");

      setTimeout(() => {
        setErrMsg(null);
      }, 2000);
    }

    if (res.status === 201) {
      setCloseDialog(true);
      router.refresh();
    }
  };

  return (
    <CreateForm
      handleChange={handleChange}
      handleClick={handleClick}
      ariaLabel="create Brand"
      close={closeDialog}
      errMsg={errMsg}
    />
  );
}
