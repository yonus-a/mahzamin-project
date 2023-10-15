import prisma from "@lib/prisma";
import { hash } from "bcrypt";

export default async function createUser(email: string, password: string) {
  const hashPassword = await hash(password, 10);

  return await prisma.user.create({
    data: {
      email,
      password: hashPassword,
    },
  });
}
