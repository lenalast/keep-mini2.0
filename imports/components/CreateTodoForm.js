import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components';

const Icon = styled.span`
  color: #747474;
  font-size: 20px;
`
const TodoInput = styled.input`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  padding: 8px 0;
  margin-left: 8px;
  background-color: transparent;
`

class CreateTodoForm extends React.Component {
  createTodo = (e) => {
    e.preventDefault()
    
    if(!this.todoName.value){
        return
    }

    this.props.createTodo({
      variables: {
        name: this.todoName.value,
        todoListId: this.props.todoListId
      }
    }).then(() => {
      this.todoName.value = ""
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <form onSubmit={this.createTodo}>
        <Icon>+</Icon> <TodoInput innerRef={input => this.todoName = input} placeholder="Post i listan" />
      </form>
    )
  }
}

const createTodo = gql`
  mutation createTodo($name: String! $todoListId: String!) {
    createTodo(name: $name todoListId: $todoListId) {
      _id
      name
    }
  }
`

export default graphql(
  createTodo, {
    name: "createTodo",
    options: {
      refetchQueries: ["TodoLists"]
    }
  }
)(CreateTodoForm)