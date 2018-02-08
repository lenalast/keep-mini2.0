import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { TodoListInput } from './styled/CreateTodoListForm.styled';

class CreateTodoListForm extends React.Component {
  createTodoList = (e) => {
    e.preventDefault()
    
    if(!this.listName.value){
        return
    }

    this.props.createTodoList({
      variables: {
        name: this.listName.value
      }
    }).then(() => {
      this.listName.value = ""
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <form onSubmit={this.createTodoList}>
        <TodoListInput innerRef={input => this.listName = input} type="text" placeholder="Gör en anteckning ..."/>
      </form>
    )
  }
}

const createTodoList = gql`
  mutation createTodoList($name: String!) {
    createTodoList(name: $name) {
      _id
      name
    }
  }
`

export default graphql(
  createTodoList, {
    name: "createTodoList",
    options: {
      refetchQueries: ["TodoLists"]
    }
  }
)(CreateTodoListForm)