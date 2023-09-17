import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import prisma from "@lib/prisma";

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return res
      .status(401)
      .json({ error: "لطفا برای ایجاد برند وارد حساب کاربری خود شوید !" });
  }

  try {
    const { name, code } = req.body;

    if (!name || !code) {
      res.status(400).json({ error: "لطفا تمام مقادر را وارد کنید !" });
    }

    const result = await prisma.color.create({
      data: {
        name,
        code,
      },
    });

    res.status(201).json(result);
  } catch (err: any) {
    if (err.code === "P2002") {
      res.status(409).json({ error: "رنگ در حال حاضر وجود دارد !" });
    } else {
      res.status(500).json({ error: "خطایی در زمان ایجاد رنگ رخ داده است !" });
    }
  }
}
