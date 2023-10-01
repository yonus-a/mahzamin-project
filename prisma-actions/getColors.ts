import prisma from "@lib/prisma";

export default function getColors() {
  return prisma.color.findMany({
    orderBy: {
      id: "desc",
    },
  });
}
