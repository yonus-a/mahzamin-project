"use client";

import ChooseBrand from "@components/choose-brand";
import ChooseCategory from "@components/choose-category";
import ChooseColor from "@components/choose-color";
import ImageInputCreator from "@components/image-input-creator";
import DetailsInputsCreator from "@components/details-inputs-creator";
import EqualizeItems from "@components/equalize-items";
import LabledInput from "@components/labeld-input";
import LabledTextarea from "@components/labeld-textarea";
import PrimaryBtn from "@components/primary-btn";
import { useForm } from "react-hook-form";
import createProductAction from "@server-actions/createProductAction";
import InfoInputsCreator from "@components/info-inputs-creator";
import { FormControlLabel, Switch } from "@mui/material";
import FontProvider from "@components/font-provider";
import Alert from "@components/alert";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./style.scss";

export default function CreateProductForm({
  brands,
  categories,
  colors,
  logos,
}: any) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const closeAlert = () => {
    setAlert(null);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();

    data.images.forEach((imgList: any) => {
      formData.append("images", imgList[0]);
    });

    const result = await createProductAction(data, formData);

    if (result.id) {
      setAlert({
        msg: "محصول با موفقیت ساخته شد !",
        type: "success",
      });

      setTimeout(() => {
        closeAlert();
        router.push("/admin/products");
      }, 1500);
    } else {
      let msg = "مشکلی در هنگام ایجاد محصول به وجود آمده است‌ ‌!!";
      let type = "error";

      if (result.code === "P2002") {
        msg = "نام محصول تکراری است !!";
      }

      setAlert({ msg, type });
      setTimeout(closeAlert, 2000);
    }
  };

  return (
    <>
      {alert && <Alert type={alert.type} msg={alert.msg} />}
      <form className="create-product" onSubmit={handleSubmit(onSubmit)}>
        <EqualizeItems>
          <ChooseBrand brands={brands} register={register} errors={errors} />
          <ChooseCategory
            categories={categories}
            register={register}
            errors={errors}
          />
        </EqualizeItems>
        <EqualizeItems>
          <LabledInput
            label="عنوان محصول"
            name="name"
            type="text"
            register={register}
            errors={errors}
          />
          <LabledInput
            label="قیمت"
            name="price"
            type="number"
            register={register}
            errors={errors}
            min={0}
          />
        </EqualizeItems>
        <EqualizeItems>
          <ChooseColor
            colors={colors}
            register={register}
            errors={errors}
            watch={watch}
          />
          <LabledInput
            label="موجودی"
            name="quantity"
            type="number"
            register={register}
            errors={errors}
            min={0}
          />
        </EqualizeItems>
        <ImageInputCreator register={register} errors={errors} watch={watch} />
        <InfoInputsCreator logos={logos} register={register} errors={errors} />
        <DetailsInputsCreator register={register} errors={errors} />
        <LabledTextarea
          label="توضیحات"
          name="description"
          register={register}
          errors={errors}
        />
        <FontProvider>
          <FormControlLabel
            control={<Switch defaultChecked {...register("publish")} />}
            label="انتشار"
          ></FormControlLabel>
        </FontProvider>
        <PrimaryBtn type="submit">ایجاد</PrimaryBtn>
      </form>
    </>
  );
}
