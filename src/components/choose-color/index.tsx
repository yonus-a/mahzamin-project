import ColorMultipleSelect from "../general/color-multiple-select";
import InputWrapper from "../general/input-wrapper";
import CreateColor from "../create-color";
import FormControl from "../general/form-control";
import ErrorMsg from "../general/error-msg";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormWatch,
} from "react-hook-form";

interface Props {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  defaultValue?: any;
  colors: any;
}

export default function ChooseColor({
  defaultValue,
  register,
  colors,
  errors,
  watch,
}: Props) {
  return (
    <FormControl className="choose-color">
      <label htmlFor="brand">رنگ</label>
      <InputWrapper className={errors.colors ? "invalid-input" : ""}>
        <ColorMultipleSelect
          items={colors}
          register={register}
          watch={watch}
          defaultValue={defaultValue}
        />
        <CreateColor />
      </InputWrapper>
      {errors.colors && <ErrorMsg> رنگ محصول نمی تواند خالی باشد </ErrorMsg>}
    </FormControl>
  );
}
