import type { NextAuthConfig } from 'next-auth'
import NextAuth from 'next-auth'
import Google from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'

const credentialsConfig = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: {
      label: 'User Name',
    },
    password: {
      label: 'Password',
      type: 'password',
    },
  },
  async authorize(credentials) {
    if (credentials.username === 'sk' && credentials.password === '123') {
      return {
        name: 'Vahid',
      }
    }
    return null
  },
})

const config = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [Google, credentialsConfig],
  session: {
    strategy: 'jwt',
  },
  debug: true,
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname === '/middlewareProtected') return !!auth
      return true
    },
    jwt({ token, account, profile }) {
      console.log(`Auth JWT Tok = ${JSON.stringify(token)}`)
      console.log(`Router Auth JWT account = ${JSON.stringify(account)}`)

      if (account) {
        token.access_token = account.access_token // Store the provider's access token in the token so that we can put it in the session in the session callback above
      }

      return token
    },
    session({ session, token }: { session: any; token: any }) {
      console.log(`Auth Sess = ${JSON.stringify(session)}`)
      console.log(`Auth Tok = ${JSON.stringify(token)}`)
      if (token.access_token) {
        session.access_token = token.access_token // Put the provider's access token in the session so that we can access it client-side and server-side with `auth()`
      }
      return session
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
