import { AuthenticationError, UserInputError } from 'apollo-server-micro'
import { createStudent, findStudent, validatePassword } from '../lib/students'
import { setLoginSession, getLoginSession } from '../lib/auth'
import { removeTokenCookie } from '../lib/auth-cookies'

export const resolvers = {
  Query: {
    async viewer(_parent, _args, context, _info) {
      try {
        const session = await getLoginSession(context.req)

        if (session) {
          return findStudent({ email: session.email })
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
      const user = await createStudent(args.input)
      return { user }
    },
    async signIn(_parent, args, context, _info) {
      const user = await findStudent({ email: args.input.email })

      if (user && (await validatePassword(user, args.input.password))) {
        const session = {
          id: user.id,
          email: user.email,
        }

        await setLoginSession(context.res, session)

        return { user }
      }

      throw new UserInputError('Invalid email and password combination')
    },
    async signOut(_parent, _args, context, _info) {
      removeTokenCookie(context.res)
      return true
    },
  },
}