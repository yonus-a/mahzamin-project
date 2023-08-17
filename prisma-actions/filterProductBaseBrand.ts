import prisma from "@lib/prisma";

export default async function filterProductBaseBrand(value: string | []) {
  if (!value) return {};

  const where: any = {};

  typeof value === "string"
    ? (where.name = value)
    : (where.OR = value.map((val) => ({ name: val })));

  const brands = await prisma.brand.findMany({ where });

  return {
    OR: brands.map((brand) => ({ brandId: brand?.id })),
  };
}
