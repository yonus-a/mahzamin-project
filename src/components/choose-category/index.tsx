import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import CreateCategory from "../category/add-category";
import InputWrapper from "../general/input-wrapper";
import CusomSelect from "../custom-select";
import FormControl from "../general/form-control";
import ErrorMsg from "../general/error-msg";

interface Props {
  defaultValue?: { id: number; name: string }[];
  categories: { id: number; name: string }[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export default function ChooseCategory({
  defaultValue,
  categories,
  register,
  errors,
}: Props) {
  return (
    <FormControl>
      <label htmlFor="category">دسته بندی</label>
      <InputWrapper className={errors.category ? "invalid-input" : ""}>
        <CusomSelect
          name="category"
          items={categories}
          register={register}
          defaultValue={defaultValue}
        />
        <CreateCategory />
      </InputWrapper>
      {errors.category && <ErrorMsg>دسته بندی نمی توانید خالی باشد</ErrorMsg>}
    </FormControl>
  );
}
