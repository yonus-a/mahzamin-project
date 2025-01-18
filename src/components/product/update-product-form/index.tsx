"use client";

import ChooseBrand from "@components/choose-brand";
import ChooseCategory from "@components/choose-category";
import ChooseColor from "@components/choose-color";
import DetailsInputsCreator from "@components/details-inputs-creator";
import EqualizeItems from "@components/general/equalize-items";
import LabledInput from "@components/general/labeld-input";
import LabledTextarea from "@components/general/labeld-textarea";
import PrimaryBtn from "@components/general/primary-btn";
import { useForm } from "react-hook-form";
import InfoInputsCreator from "@components/general/info-inputs-creator";
import { FormControlLabel, Switch } from "@mui/material";
import FontProvider from "@components/general/font-provider";
import Alert from "@components/general/alert";
import { useState } from "react";
import { useRouter } from "next/navigation";
import updateProductAction from "@server-actions/product/updateProductAction";
import UpdateImages from "@components/widgets/update-images";
import "./style.scss";

export default function UpdateProductForm({
  brands,
  categories,
  colors,
  logos,
  product,
}: any) {
  const {
    handleSubmit,
    register,
    watch,
    unregister,
    formState: { errors },
  } = useForm();
  const [alert, setAlert] = useState<any>(null);
  const router = useRouter();

  const closeAlert = () => {
    setAlert(null);
  };

  const onSubmit = async (data: any) => {
    const colors = data.colors;
    data.colors = typeof colors === "string" ? colors.split(",") : colors;
    data.productId = product.id;
    data.ProductColor = product.ProductColor;

    const formData = new FormData();
    const mainImage = data.mainImage.file;

    if (mainImage.length > 0) {
      formData.append("mainImage", mainImage[0]);
    }

    const chnagedImages = data.image?.filter(
      ({ file }: any) => file.length > 0
    );

    if (chnagedImages.length) {
      chnagedImages.forEach((img: any, idx: number) => {
        formData.append(`images[${idx}].file`, img.file[0]);
        formData.append(`images[${idx}].id`, img.id);
      });
    }

    const result: any = await updateProductAction(data, formData);

    if (result.id) {
      setAlert({
        msg: "محصول با موفقیت بروزرسانی شد !",
        type: "success",
      });

      setTimeout(() => {
        closeAlert();
        router.push("/admin/products");
      }, 1500);
    } else {
      let msg = "مشکلی در هنگام بروزرسانی محصول به وجود آمده است‌ ‌!!";
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
      <form className="update-product-form" onSubmit={handleSubmit(onSubmit)}>
        <EqualizeItems>
          <ChooseBrand
            brands={brands}
            register={register}
            errors={errors}
            defaultValue={product.brandId}
          />
          <ChooseCategory
            categories={categories}
            register={register}
            errors={errors}
            defaultValue={product.categoryId}
          />
        </EqualizeItems>
        <EqualizeItems>
          <LabledInput
            label="عنوان محصول"
            name="name"
            type="text"
            register={register}
            errors={errors}
            defaultValue={product.name}
          />
          <LabledInput
            label="قیمت"
            name="price"
            type="number"
            register={register}
            errors={errors}
            defaultValue={product.price}
            min={0}
          />
        </EqualizeItems>
        <EqualizeItems>
          <ChooseColor
            colors={colors}
            register={register}
            errors={errors}
            watch={watch}
            defaultValue={product.ProductColor.map(
              (item: any) => item.Color.id
            )}
          />
          <LabledInput
            label="موجودی"
            name="quantity"
            type="number"
            register={register}
            errors={errors}
            defaultValue={product.quantity}
            min={0}
          />
        </EqualizeItems>
        <details>
          <summary>تصاویر</summary>
          <UpdateImages product={product} register={register} watch={watch} />
        </details>
        <details>
          <summary>اطلاعات مختصر</summary>
          <InfoInputsCreator
            defaultValue={product.Info}
            logos={logos}
            register={register}
            errors={errors}
            unregister={unregister}
          />
        </details>
        <details>
          <summary>اطلاعات تکمیلی</summary>
          <DetailsInputsCreator
            defaultValue={product.Detail}
            register={register}
            errors={errors}
            unregister={unregister}
          />
        </details>
        <LabledTextarea
          label="توضیحات"
          name="description"
          register={register}
          defaultValue={product.description}
          errors={errors}
        />
        <FontProvider>
          <FormControlLabel
            control={
              <Switch
                defaultChecked={product.publish}
                {...register("publish")}
              />
            }
            label="انتشار"
          ></FormControlLabel>
        </FontProvider>
        <PrimaryBtn type="submit">ایجاد</PrimaryBtn>
      </form>
    </>
  );
}
