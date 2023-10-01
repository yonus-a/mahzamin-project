import prisma from "@lib/prisma";

export default function getCategories() {
  return prisma.category.findMany({
    orderBy: {
      id: "desc",
    },
  });
}
