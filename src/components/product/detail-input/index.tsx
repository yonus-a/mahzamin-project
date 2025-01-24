"use client";

import FieldArray from "@components/general/field-array";
import Input from "../../general/input";

export default function DetailInput() {
  return (
    <FieldArray name="details" title="مشخصات">
      {(idx: any) => (
        <>
          <Input name={`details.${idx}.definetion`} />
          <Input name={`details.${idx}.term`} />
        </>
      )}
    </FieldArray>
  );
}
