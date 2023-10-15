import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { search } = req.query;

  if (!search) res.status(404).json({});

  const results = await prisma.product.findMany({
    take: 6,
    where: {
      name: {
        contains: search as string,
      },
    },
  });

  return res.status(200).json({ results });
}
