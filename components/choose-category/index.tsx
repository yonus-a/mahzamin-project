import CusomSelect from "@components/custom-select";
import InputWrapper from "@components/input-wrapper";
import CreateCategory from "@components/create-category";
import prisma from "@lib/prisma";

export default async function ChooseCategory() {
  const categories = await prisma.category.findMany({
    orderBy: {
      id: "desc",
    },
  });

  return (
    <InputWrapper>
      <CusomSelect name="category" items={categories} label="دسته بندی" />
      <CreateCategory />
    </InputWrapper>
  );
}
