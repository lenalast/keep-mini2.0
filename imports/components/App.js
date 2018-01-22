import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import CreateList from './CreateList'
import Header from './Header'
import '../sass/main'

const deleteTodo = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(_id: $id) {
      _id
    }
  }
`

const App = ({ data }) => {
  if (data.loading) return null;

  removeTodo = (todoId) => {
    this.props.deleteTodo({
      variables: {
        _id: todoId
      }})
      .then(({data}) => {
        console.log('Res data: ', data)
      this.props.refetch()
    })
      .catch(err => {
      console.error(err)})
  }

  return (
    <div>
      <Header />
      <CreateList refetch={data.refetch} />
      <ul className="list-wrapper">
        {
          data.todos.map(todo => (
            <p key={todo._id}>
              {todo.name}
            </p>
          ))
        }
      </ul>
    </div>
  )
}

const todosQuery = gql`
{
  todos {
    name
    _id
  }
}
`

export default graphql(
  todosQuery,
  deleteTodo,
)(App)