import CredentialsProvider from "next-auth/providers/credentials";
import getUserByEmail from "@server-actions/user/getUserByEmail";
import createUser from "@server-actions/user/createUser";
import GitHubProvider from "next-auth/providers/github";
import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import { compare } from "bcrypt";
import prisma from "@lib/prisma";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          throw Error("آدرس ایمیل و پسورد نمی تواند خالی باشد");
        }

        let maybeUser = await getUserByEmail(email);

        if (!maybeUser) {
          maybeUser = await createUser(email, password);
        } else {
          // const match = await compare(password, maybeUser.password as string);
          // if (!match) {
          //   throw Error("پسورد اشتباه است !");
          // }
        }

        return maybeUser;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
