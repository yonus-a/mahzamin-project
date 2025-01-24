"use client";

import FieldArray from "@components/general/field-array";
import Select from "../../general/select";
import Input from "../../general/input";

export default function InfoInput({ logos }: any) {
  return (
    <FieldArray name="info" title="اطلاعات مختصر">
      {(idx: any) => (
        <>
          <Input name={`info.${idx}.title`} />
          <Input name={`info.${idx}.subtitle`} />
          <Select items={logos} name={`info.${idx}.logo`} />
        </>
      )}
    </FieldArray>
  );
}
