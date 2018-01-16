import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import CreateList from './CreateList'
import '../sass/main'

const App = ({ data }) => {
console.log(data)
  return (
    <div>
      <h1>Keep-Mini</h1>
      <CreateList refetch={data.refetch} />
      <ul>

        {/* {
        data.todos.map(todo => (
          <li key={todo._id}>
            {todo.name}
          </li>
        ))} */}
      </ul>
    </div>
  )
}

const todosQuery = gql`
query todos {
  todos {
    name
    _id
  }
}
`

export default graphql(
  todosQuery
)(App)