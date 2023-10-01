import InputWrapper from "@components/input-wrapper";
import CreateColor from "@components/create-color";
import ColorMultipleSelect from "@components/color-multiple-select";
import FormControl from "@components/form-control";
import ErrorMsg from "@components/error-msg";

export default function ChooseColor({ colors, register, errors, watch }: any) {
  return (
    <FormControl className="choose-color">
      <label htmlFor="brand">رنگ</label>
      <InputWrapper className={errors.colors ? "invalid-input" : ""}>
        <ColorMultipleSelect items={colors} register={register} watch={watch} />
        <CreateColor />
      </InputWrapper>
      {errors.colors && <ErrorMsg> رنگ محصول نمی تواند خالی باشد </ErrorMsg>}
    </FormControl>
  );
}
