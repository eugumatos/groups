import { query as q } from "faunadb";

import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { fauna } from "../../../services/faunadb";

export default NextAuth({
  providers: [
    Providers.Facebook({ 
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      scope: "public_profile"
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn(user, account, profile) {
      const { email } = user;

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Index('users_by_email'),
                  q.Casefold(user.email)
                )
              )
            ),
            q.Create(
              q.Collection('users'),
              { data: { email } }
            ),
            q.Get(
              q.Match(
                q.Index('users_by_email'),
                q.Casefold(user.email)
              )
            )
          )
        );
        
        return true;
      } catch (error) {
        return false;
      }
    }
  }
});
