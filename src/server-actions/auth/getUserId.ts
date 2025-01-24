"use server";

import getSession from "./getSession";

export default async function getUserId() {
  const session: any = await getSession();
  return session?.user?.id;
}
