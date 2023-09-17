import CusomSelect from "@components/custom-select";
import SelectWrapper from "@components/select-wrapper";
import CreateCategory from "@components/create-category";
import prisma from "@lib/prisma";

export default async function ChooseCategory() {
  const categories = await prisma.category.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <SelectWrapper>
      <CusomSelect items={categories} label="دسته بندی" />
      <CreateCategory />
    </SelectWrapper>
  );
}
