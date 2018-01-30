import gql from 'graphql-tag'

export default gql`  
  
type TodoList {
  _id: String!
  name: String!
  userId: String 
  todos: [Todo]
  color: String
}

type Query {
  todoLists: [TodoList]
  todoList(_id: String!): TodoList
}

type Mutation {
  createTodoList(name: String!): TodoList
  deleteTodoList(_id: String!): Boolean
  updateTodoList(_id: String! name: String!): TodoList
  updateTodoListColor(_id: String! color: String!): TodoList
}
`