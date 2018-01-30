import gql from 'graphql-tag';

export default gql`
  type User {
    _id: String!
    email: String!
  }
`