"use server";

import { authOptions } from "@utils/auth/authOptions";
import { getServerSession } from "next-auth";

export default async function getSession() {
  return await getServerSession(authOptions);
}
