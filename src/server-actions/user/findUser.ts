import prisma from "@lib/prisma";

export default async function findUser(phone: string, password: string) {
  return await prisma.user.findFirst({
    where: {
      phone,
    },
  });
}
