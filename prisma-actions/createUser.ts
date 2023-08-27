import prisma from "@lib/prisma";

export default async function createUser(phone: string, password: string) {
  return await prisma.user.create({
    data: {
      phone,
      password,
    },
  });
}
