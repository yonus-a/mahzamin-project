import prisma from "@lib/prisma";

export default async function getCategory(id: number) {
  return await prisma.category.findUnique({
    where: {
      id,
    },
  });
}
