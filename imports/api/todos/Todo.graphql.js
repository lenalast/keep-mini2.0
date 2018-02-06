import gql from 'graphql-tag'

export default gql`
type Todo {
  _id: String!
  name: String!
  done: Boolean!
  todoListId: String
}

extend type Query {
  todos: [Todo]
  todo(_id: String!): Todo
}

extend type Mutation {
  createTodo(name: String!, todoListId: String!): Todo
  deleteTodo(_id: String!): Boolean
  updateTodo(_id: String! name: String!): Todo
  updateTodoStatus(_id: String! done: Boolean!): Todo
}
`