"use client";

import AddCategory from "@components/category/add-category";
import EqualizeItems from "../../general/equalize-items";
import Checkbox from "@components/general/checkbox";
import Textarea from "@components/general/textarea";
import AddBrand from "@components/brand/add-brand";
import PrimaryBtn from "../../general/primary-btn";
import Select from "@components/general/select";
import { FormProvider } from "react-hook-form";
import DetailInput from "../detail-input";
import { ProductFormType } from "./type";
import Input from "../../general/input";
import InfoInput from "../info-input";
import "./style.scss";

export default function ProductForm(props: ProductFormType) {
  return (
    <FormProvider {...props.methods}>
      <form
        className="product-form"
        onSubmit={props.methods.handleSubmit(props.onSubmit)}
      >
        <EqualizeItems>
          <Select items={props.brands} name="brand" placeholder="دسته بندی" />
          <AddBrand />
          <Select
            items={props.categories}
            name="categories"
            placeholder="برند"
          />
          <AddCategory />
        </EqualizeItems>
        <EqualizeItems>
          <Input label="عنوان محصول" name="name" type="text" />
          <Input label="قیمت" name="price" type="number" />
        </EqualizeItems>
        <EqualizeItems>
          <Select items={props.colors} name="color" placeholder="رنگ" />
          <Input label="موجودی" name="quantity" type="number" />
        </EqualizeItems>
        {/* <ImageInputCreator
            register={register}
            errors={errors}
            watch={watch}
          /> */}
        <InfoInput />
        <DetailInput />
        <Textarea label="توضیحات" name="description" />
        <Checkbox name="publish" label="انتشار" />
        <PrimaryBtn type="submit">ایجاد</PrimaryBtn>
      </form>
    </FormProvider>
  );
}
