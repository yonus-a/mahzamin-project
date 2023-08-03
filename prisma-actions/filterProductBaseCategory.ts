import prisma from "@lib/prisma";

const obj = {
  mobile: "موبایل",
  laptop: "لپتاپ",
  watch: "ساعت هوشمند",
  accessories: "لوازم جانبی موبایل",
  tablet: "تبلت",
};

export default async function filterProductBaseCategory(category: string) {
  if (!category) return {};

  const categoryId = await prisma.category.findFirst({
    where: {
      name: obj[category],
    },
  });

  return {
    categoryId: categoryId?.id,
  };
}
