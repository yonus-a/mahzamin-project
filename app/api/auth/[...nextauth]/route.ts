import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import prisma from "@lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "ایمیل:",
          type: "email",
          required: true,
        },
        password: {
          label: "رمز عبور:",
          type: "password",
          required: true,
        },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          return null;
        }

        let maybeUser = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        if (!maybeUser) {
          maybeUser = await prisma.user.create({
            data: {
              email,
              password,
            },
          });
        } else {
          if (maybeUser?.password !== password) {
            return null;
          }
        }

        return maybeUser;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "light",
    brandColor: "#FDC210",
    logo: "/images/logo.png",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
