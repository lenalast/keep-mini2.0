import gql from 'graphql-tag'

export default gql`
type Todo {
  _id: String!
  name: String!
}

type Query {
  todos: [Todo]
  todo(_id: String!): Todo
}

type Mutation {
  createTodo(name: String!): Todo
  deleteTodo(_id: String!): Todo
  updateTodo(_id: String! name: String!): Todo
}
`

