import prisma from "@lib/prisma";

const alternate = {
  mobile: "موبایل",
  laptop: "لپتاپ",
  watch: "ساعت هوشمند",
  accessories: "لوازم جانبی موبایل",
  tablet: "تبلت",
};

export default async function filterProductBaseCategory(value: string | []) {
  if (!value) return {};

  const where: any = {};

  typeof value === "string"
    ? (where.name = alternate[value as keyof typeof alternate])
    : (where.OR = value.map((val) => ({
        name: alternate[val as keyof typeof alternate],
      })));

  const wantedCategories = await prisma.category.findMany({ where });
  const notWantedCategories = await prisma.category.findMany({
    where: { NOT: where.OR || where },
  });

  return {
    OR: wantedCategories.map((category) => ({ categoryId: category?.id })),
    NOT: notWantedCategories.map((category) => ({ categoryId: category?.id })),
  };
}
