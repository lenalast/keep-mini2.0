import gql from 'graphql-tag'

export default gql`
type Todo {
  _id: String!
  name: String!
}

type TodoList {
  _id: String!
  name: String!
  todos: [Todo]
}

type Query {
  todo(_id: String!): Todo
  todoLists: [TodoList]
}

type Mutation {
  createTodo(name: String!): Todo
  deleteTodo(_id: String!): Todo
  updateTodo(_id: String! name: String!): Todo
  updateTodoInList(todo_id: String! list_id: String!): TodoList 
}
`
//updateTodoInList 
//default value for todos in todolists