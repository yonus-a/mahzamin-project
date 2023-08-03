import prisma from "@lib/prisma";

export default async function filterProductBaseBrand(value: string) {
  if (!value) return {};

  const brand = await prisma.brand.findFirst({
    where: {
      name: value,
    },
  });

  return {
    brandId: brand?.id,
  };
}
