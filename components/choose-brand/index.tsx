import CreateBrand from "@components/create-brand";
import CusomSelect from "@components/custom-select";
import ErrorMsg from "@components/error-msg";
import FormControl from "@components/form-control";
import InputWrapper from "@components/input-wrapper";

export default function ChooseBrand({
  brands,
  register,
  errors,
  defaultValue,
}: any) {
  return (
    <FormControl>
      <label htmlFor="brand">برند</label>
      <InputWrapper className={errors.brand ? "invalid-input" : ""}>
        <CusomSelect
          name="brand"
          items={brands}
          register={register}
          defaultValue={defaultValue}
        />
        <CreateBrand />
      </InputWrapper>
      {errors.brand && <ErrorMsg>برند نمی توانید خالی باشد</ErrorMsg>}
    </FormControl>
  );
}
