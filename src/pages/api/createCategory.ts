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
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: "لطفا تمام مقادر را وارد کنید !" });
    }

    const result = await prisma.category.create({
      data: {
        name,
      },
    });

    res.status(201).json(result);
  } catch (err: any) {
    if (err.code === "P2002") {
      res.status(409).json({ error: "دسته بندی در حال حاضر وجود دارد !" });
    } else {
      res
        .status(500)
        .json({ error: "خطایی در زمان ایجاد دسته بندی رخ داده است !" });
    }
  }
}
