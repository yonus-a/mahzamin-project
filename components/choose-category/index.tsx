import CusomSelect from "@components/custom-select";
import InputWrapper from "@components/input-wrapper";
import CreateCategory from "@components/create-category";
import ErrorMsg from "@components/error-msg";
import FormControl from "@components/form-control";

export default function ChooseCategory({ categories, register, errors }: any) {
  return (
    <FormControl>
      <label htmlFor="category">دسته بندی</label>
      <InputWrapper className={errors.category ? "invalid-input" : ""}>
        <CusomSelect name="category" items={categories} register={register} />
        <CreateCategory />
      </InputWrapper>
      {errors.category && <ErrorMsg>دسته بندی نمی توانید خالی باشد</ErrorMsg>}
    </FormControl>
  );
}
