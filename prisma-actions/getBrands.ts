import prisma from "@lib/prisma";

export default function getBrands() {
  return prisma.brand.findMany({
    orderBy: {
      id: "desc",
    },
  });
}
