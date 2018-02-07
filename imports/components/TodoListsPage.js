import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import styled from 'styled-components';
import CreateTodoListForm from './CreateTodoListForm'
import CreateTodoForm from './CreateTodoForm'
import ColorPicker from './ColorPicker'

const TodoListsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 948px; // fits 3 lists
  margin: 0 auto;
  padding: 32px;
`

const TodoList = styled.div`
  padding: 16px 0 0 0;
  margin: 16px 8px;
  width: 300px; 
  background-color: ${({ bgColor }) => bgColor ? bgColor : '#fff'};
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

const ListName = styled.input`
  margin-bottom: 8px;
  padding: 0 16px;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-size: 17px;
`

const Todo = styled.div`
  display: flex;
  align-items: center;
  height: 26px;
  font-family: Roboto, sans-serif; // google uses Roboto Slab 
  line-height: 19px;
  font-size: 14px;
  padding: 0 16px;
  &:hover .fa {
    display: inline-block;
  }
`

const CheckBox = styled.input.attrs({
  type: 'checkbox'
}) `
  margin-right: 8px;
`

const TodoName = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: none;
  background-color: transparent;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-decoration: ${props => props.done ? 'line-through' : 'none'};
  opacity: ${props => props.done ? '0.7' : '1'};
`

const TodoListFooter = styled.div`
  border-top: 1px solid #747474;
  border-bottom: 1px solid #747474;
  margin-top: 8px;
  padding: 0 16px 0 20px;
`

const DeleteIcon = styled.div`
  display: none;
  opacity: 0.5;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 18px; 
  cursor: pointer;
  transition: opacity 200ms;
  &:hover {
    opacity: 1;
  }
`

const TrashIcon = styled.i`
  opacity: 0.5;
  float: right;
  padding: 12px;
  cursor: pointer;
  transition: opacity 200ms;
  &:hover {
    opacity: 1;
  }
`

class TodoListsPage extends Component {
  deleteTodoList = (_id) => {
    this.props.deleteTodoList({
      variables: {
        _id
      }
    }).catch(err => console.error(err))
  }

  deleteTodo = (_id) => {
    this.props.deleteTodo({
      variables: {
        _id
      }
    }).catch(err => console.error(err))
  }

  updateListName = (e, _id) => {
    const name = e.target.value

    this.props.updateTodoList({
      variables: {
        _id,
        name
      }
    }).catch(err => console.error(err))
  }

  handleUpdateListNameOnEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.target.blur()
    }
  }

  updateTodoName = (e, _id) => {
    const name = e.target.value

    this.props.updateTodo({
      variables: {
        _id,
        name
      }
    }).catch(err => console.error(err))
  }

  handleUpdateTodoNameOnEnterKey = (e) => {
    if (e.keyCode == 13) {
      e.target.blur()
    }
  }

  toggleTodoDone = (_id, status) => {
    this.props.updateTodoStatus({
      variables: {
        _id,
        done: !status
      }
    }).catch(err => console.error(err))
  }

  updateTodoListColor = (_id, color) => {
    this.props.updateTodoListColor({
      variables: {
        _id,
        color
      }
    })
      .catch(err => console.error(err))
  }

  render() {
    const { todoLists = [], loading } = this.props;

    return (
      <div>
        <CreateTodoListForm />
        <TodoListsGrid>
          {
            todoLists.map(list =>
              <TodoList key={list._id} bgColor={list.color}>
                <ListName
                  defaultValue={list.name}
                  onBlur={(e) => this.updateListName(e, list._id)}
                  onKeyUp={(e) => this.handleUpdateListNameOnEnterKey(e)}
                />
                {
                  list.todos.map(todo =>
                    <Todo key={todo._id}>
                      <CheckBox
                        checked={todo.done}
                        onChange={() => this.toggleTodoDone(todo._id, todo.done)}
                      />
                      <TodoName
                        done={todo.done}
                        defaultValue={todo.name}
                        onBlur={(e) => this.updateTodoName(e, todo._id)}
                        onKeyUp={(e) => this.handleUpdateTodoNameOnEnterKey(e)}
                      />
                      <DeleteIcon className="fa fa-times-circle" onClick={() => this.deleteTodo(todo._id)} />
                    </Todo>
                  )
                }
                <TodoListFooter>
                  <CreateTodoForm todoListId={list._id} />
                </TodoListFooter>

                <ColorPicker onSelectColor={(color) => this.updateTodoListColor(list._id, color)} />

                <TrashIcon className="fa fa-trash" onClick={() => this.deleteTodoList(list._id)} />
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
      color
      todos {
        _id
        name
        done
      }
    }
  }
`
const deleteTodoList = gql`
 mutation deleteTodoList($_id: String!) {
  deleteTodoList(_id: $_id)
 }
`

const deleteTodo = gql`
 mutation deleteTodo($_id: String!) {
  deleteTodo(_id: $_id)
 }
`

const updateTodoList = gql`
 mutation updateTodoList($_id: String! $name: String!) {
  updateTodoList(_id: $_id name: $name){
    name
  }
 }
`

const updateTodoListColor = gql`
 mutation updateTodoListColor($_id: String! $color: String!) {
  updateTodoListColor(_id: $_id color: $color){
    name
  }
 }
`

const updateTodo = gql`
 mutation updateTodo($_id: String! $name: String!) {
  updateTodo(_id: $_id name: $name){
    name
  }
 }
`

const updateTodoStatus = gql`
 mutation updateTodoStatus($_id: String! $done: Boolean!) {
  updateTodoStatus(_id: $_id done: $done){
    done
  }
 }
`

export default compose(
  graphql(
    todoListsQuery, {
      props: ({ data }) => ({ ...data })
    }),
  graphql(
    deleteTodoList, {
      name: "deleteTodoList",
      options: {
        refetchQueries: ["TodoLists"]
      }
    }),
  graphql(
    deleteTodo, {
      name: "deleteTodo",
      options: {
        refetchQueries: ["TodoLists"]
      }
    }),
  graphql(
    updateTodoList, {
      name: "updateTodoList",
      options: {
        refetchQueries: ["TodoLists"]
      }
    }),
  graphql(
    updateTodoListColor, {
      name: "updateTodoListColor",
      options: {
        refetchQueries: ["TodoLists"]
      }
    }),
  graphql(
    updateTodo, {
      name: "updateTodo",
      options: {
        refetchQueries: ["TodoLists"]
      }
    }),
  graphql(
    updateTodoStatus, {
      name: "updateTodoStatus",
      options: {
        refetchQueries: ["TodoLists"]
      }
    })
)(TodoListsPage)