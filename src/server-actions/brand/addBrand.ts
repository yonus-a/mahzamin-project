"use server";

import generateCommenAction from "@server-actions/general/generateCommenAction";
import prisma from "@/lib/prisma";

export default generateCommenAction(prisma.brand);
