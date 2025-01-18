import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import InputWrapper from "../general/input-wrapper";
import CusomSelect from "../custom-select";
import FormControl from "../general/form-control";
import CreateBrand from "../create-brand";
import ErrorMsg from "../general/error-msg";

interface Props {
  defaultValue?: { id: number; name: string }[];
  brands: { id: number; name: string }[];
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}

export default function ChooseBrand({
  defaultValue,
  brands,
  register,
  errors,
}: Props) {
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
