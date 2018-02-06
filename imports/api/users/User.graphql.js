import gql from 'graphql-tag';

export default gql`
  type User {
    _id: String!
    email: String!
    avatar: String!
  }
  
  extend type Query {
      user(_id: String!): User
  }
`
