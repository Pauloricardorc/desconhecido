import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: '8dfacb7f57e55b4719ae',
      clientSecret: '8d424d1fa315f21d3771ab011fbd0eac8cdde6b0',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)