import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Icon, TodoInput } from './styled/CreateTodoForm.styled';

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