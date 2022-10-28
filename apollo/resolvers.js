import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { createEmployees, findEmployees, validatePassword } from '../lib/employees'
import { setLoginSession, getLoginSession } from '../lib/auth'
import { removeTokenCookie } from '../lib/auth-cookies'

export const resolvers = {
  Query: {
    async viewer(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req)

        if (session) {
          return findEmployees({ email: session.email })
        }
      } catch (error) {
        throw new AuthenticationError(
          'Authentication token is invalid, please log in'
        )
      }
    },
  },
  Mutation: {
    async signUp(_parent, args, _context, _info) {
      console.log( args );
      const user = await createEmployees(args.input)
      return { user }
    },
    async signIn(_parent, args, _context, _info) {
      const user = await findEmployees({ email: args.input.email })
      return { user }
     

     
    },
    async signOut(_parent, _args, context, _info) {
      removeTokenCookie(context.res)
      return true
    },
  },
}