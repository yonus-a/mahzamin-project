import CredentialsProvider from "next-auth/providers/credentials";
import authorizeUser from "@/server-actions/auth/authrizeUser";
import { LoginSchema } from "@/app/auth/signin/type";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRETL,
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials: any): Promise<any> {
        const { error } = LoginSchema.safeParse(credentials);
        if (error) throw new Error(error.errors[0].message);
        const user = await authorizeUser(credentials);

        return {
          id: user.id,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account) token = Object.assign(token, user);
      return token;
    },
    async session({ session, token }: any) {
      session.user.id = token.id;
      return session;
    },
  },
};
