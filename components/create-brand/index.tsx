"use client";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import CreateForm from "@components/create-form";
import fetchPost from "@utils/fetchPost";
import ErrorContext from "@context/errorContext";

export default function CreateBrand() {
  const [value, setValue] = useState();
  const [closeDialog, setCloseDialog] = useState(false);
  const { setErrMsg } = useContext<any>(ErrorContext);
  const router = useRouter();

  const handleChange = ({ target }: any) => {
    setValue(target.value);
  };

  const handleClick = async () => {
    setCloseDialog(false);

    if (!value) {
      return setErrMsg("لطفا تمام مقادیر را وارد کنید !");
    }

    const res = await fetchPost("http://localhost:3000/api/createBrand", {
      name: value,
    });

    if (res.ok) {
      setCloseDialog(true);
      router.refresh();
    } else {
      res.json().then(({ error }) => {
        setErrMsg(error);
      });
    }
  };

  return (
    <CreateForm
      handleChange={handleChange}
      handleClick={handleClick}
      ariaLabel="create Brand"
      close={closeDialog}
    />
  );
}
