import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components';

const TodoListInput = styled.input`
  display: block;
  padding: 12px;
  font-size: 14px;
  box-sizing: border-box;
  width: 500px;
  margin: 16px auto 0 auto;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
`

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