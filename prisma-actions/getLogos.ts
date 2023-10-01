import prisma from "@lib/prisma";

export default function getLogos() {
  return prisma.logo.findMany();
}
