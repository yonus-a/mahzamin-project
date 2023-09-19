import CreateBrand from "@components/create-brand";
import CusomSelect from "@components/custom-select";
import InputWrapper from "@components/input-wrapper";
import prisma from "@lib/prisma";

export default async function ChooseBrand() {
  const brands = await prisma.brand.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <InputWrapper>
      <CusomSelect items={brands} label="برند" />
      <CreateBrand />
    </InputWrapper>
  );
}
