import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@app/api/auth/[...nextauth]/route";
import prisma from "@lib/prisma";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ message: "plase signin to create a brand" });
  }

  try {
    const { name } = req.body;
    const result = await prisma.brand.create({
      data: {
        name,
      },
    });

    res.status(201).json(result);
  } catch (err: any) {
    if (err.code === "P2002") {
      res.status(409).json({ message: "Brand is already exists" });
    } else {
      res
        .status(500)
        .json({ message: "Error has occured while creating a brand" });
    }
  }
}
