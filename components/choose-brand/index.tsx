import CreateBrand from "@components/create-brand";
import CusomSelect from "@components/custom-select";
import SelectWrapper from "@components/select-wrapper";
import prisma from "@lib/prisma";

export default async function ChooseBrand() {
  const brands = await prisma.brand.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <SelectWrapper>
      <CusomSelect items={brands} label="برند" />
      <CreateBrand />
    </SelectWrapper>
  );
}
