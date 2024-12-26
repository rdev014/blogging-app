import { connect } from "@/dbconfig/dbconfig";
import User from "@/models/UserModel";
import { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {

    async jwt({ token, user, account }) {
      if (user) {
        token.userId = user.id;
      }
      if (account) {
        token.provider = account.provider;
      }
      return token;
    }, 
    async session({ session, token }: any) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.provider = token.provider as string;
      }
      return session;
    },
    async signIn({ user, account }) {

      try {
        await connect();
        const exixtingUser = await User.findOne({ email: user.email });
        if (exixtingUser) {
          await User.findOneAndUpdate(
            { email: user.email },
            {
              $addToSet:
              {
                providers: account?.provider,
              },
              $set: { image: user.image, username: user.email }
            }, { new: true });

        } else {
          await User.create({
            username: user.email,
            email: user.email,
            image: user.image,
            providers: [account?.provider],
          });

        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback", error);
        return false;
      }

    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error', // Error code passed in query string as ?error=

  },


}