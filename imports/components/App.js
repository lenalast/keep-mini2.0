import '../sass/main'
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import Header from './Header'
import AccessPage from "./AccessPage";
import TodoListsPage from "./TodoListsPage";
import { Route, Switch, Redirect } from "react-router-dom";

const deleteTodo = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(_id: $id) {
      _id
    }
  }
`

const App = ({ data }) => {

  const removeTodo = (todoId) => {
    this.props.deleteTodo({
      variables: {
        _id: todoId
      }
    })
      .then(({ data }) => {
        console.log('Res data: ', data)
        this.props.refetch()
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div>
      <Header/>
      <Route exact path="/" component={Meteor.userId() ? TodoListsPage : AccessPage}/>
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