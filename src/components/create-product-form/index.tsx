"use client";

import DetailsInputsCreator from "../details-inputs-creator";
import { FormControlLabel, Switch } from "@mui/material";
import useCreateProduct from "@hooks/useCreateProduct";
import ImageInputCreator from "../general/image-input-creator";
import InfoInputsCreator from "../general/info-inputs-creator";
import ChooseCategory from "../choose-category";
import LabledTextarea from "../general/labeld-textarea";
import EqualizeItems from "../general/equalize-items";
import FontProvider from "../general/font-provider";
import ChooseBrand from "../choose-brand";
import ChooseColor from "../choose-color";
import { useForm } from "react-hook-form";
import LabledInput from "../general/labeld-input";
import PrimaryBtn from "../general/primary-btn";
import Alert from "../general/alert";
import "./style.scss";

interface Prpos {
  colors: { id: number; name: string; code: string }[];
  categories: { id: number; name: string }[];
  brands: { id: number; name: string }[];
  logos: { id: number; name: string }[];
}

export default function CreateProductForm({
  categories,
  brands,
  colors,
  logos,
}: Prpos) {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const { alert, onSubmit } = useCreateProduct();

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
