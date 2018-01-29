import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from 'styled-components';

const TodoListsGrid = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 800px; // fits 3 lists
  margin: 0 auto;
  padding: 32px;
`

const TodoList = styled.div`
  padding: 16px 0;
  margin: 16px 8px;
  width: 240px; 
  background-color: #fff;
  transition: all 300ms;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
              0 3px 1px -2px rgba(0,0,0,0.2), 
              0 1px 5px 0 rgba(0,0,0,0.12);
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08),
                0 3px 14px 0 rgba(0,0,0,0.05), 
                0 1px 7px 4px rgba(0,0,0,0.08);
  }
`

const ListName = styled.h3`
  font-family: Roboto, sans-serif;
  margin-bottom: 8px;
  padding: 0 16px;
  font-size: 17px;
`

const Todo = styled.div`
  font-family: Roboto, sans-serif; // google uses Roboto Slab 
  line-height: 19px;
  font-size: 14px;
  padding: 8px 16px 0 16px;
  &:hover .del {
    display: inline-block;
  }
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 8px;
`

const Icon = styled.span`
  color: #a0a0a0;
  font-size: 20px;
`

const TodoListFooter = styled.div`
  border-top: 1px solid #dedede;
  border-bottom: 1px solid #dedede;
  margin-top: 8px;
  padding: 0 16px 0 20px;
`

const TodoInput = styled.input`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  padding: 8px 0;
  margin-left: 8px;
`

const DeleteIcon = styled.div`
  display: none;
  background-color: #a0a0a0;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  transform: rotate(45deg);
  font-size: 14px;
  float: right; 
  cursor: pointer
`

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

class TodoListsPage extends Component {
  render() {
    const { todoLists = [], loading } = this.props;

    return (
      <div>
        {/* input create todo*/}
        <TodoListInput type="text" placeholder="Gör en anteckning ..."/>


        <TodoListsGrid>
          {
            todoLists.map(list =>
              <TodoList key={list._id}>
                <ListName>{list.name}</ListName>
                {
                  list.todos.map(todo =>
                    <Todo key={todo._id}>
                      <CheckBox/> {todo.name} <DeleteIcon className="del">+</DeleteIcon>
                    </Todo>
                  )
                }
                <TodoListFooter>
                  <Icon>+</Icon> <TodoInput placeholder="Post i listan"/>
                </TodoListFooter>
              </TodoList>
            )
          }
        </TodoListsGrid>
      </div>
    )
  }
}

const todoListsQuery = gql`
  query TodoLists {
    todoLists {
      _id
      name
      todos {
        _id
        name
      }
    }
  }
`

export default graphql(todoListsQuery, {
  props: ({ data }) => ({ ...data })
})(TodoListsPage)