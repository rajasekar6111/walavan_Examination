import { gql } from '@apollo/client'

export const typeDefs = gql`
  type User {
    id: ID
    email: String
    createdAt: Int
  }

  input SignUpInput {
    fname:String
    lname:String
    DOB:String
    email: String
    password: String
    phone_no: String
  }

  input SignInInput {
    email: String!
    password: String!
  }

  type SignUpPayload {
    user: User!
  }

  type SignInPayload {
    user: User!
  }

  type Query {
    user(id: ID!): User!
    users: [User]!
    viewer: User
  }

  type Mutation {
    signUp(input: SignUpInput!): SignUpPayload!
    signIn(input: SignInInput!): SignInPayload!
    signOut: Boolean!
  }
`