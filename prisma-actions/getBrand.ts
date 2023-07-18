import prisma from "@lib/prisma";

export default async function getBrand(id: number) {
  return await prisma.brand.findUnique({
    where: {
      id,
    },
  });
}
