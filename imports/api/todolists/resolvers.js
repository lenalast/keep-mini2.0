import TodoLists from './todolists.collection'
import Todos from "../todos/todos.collection";

export default {
  Query: {
    todoLists: (obj, args, { userId }) => {
      if(!userId){
        return null
      }
      return TodoLists.find({ userId }).fetch()
    },
    todoList: (_, {_id}) => {
      return TodoLists.findOne({ _id })
    },
  },

  TodoList: {
    todos: todoList => {
      return Todos.find({ todoListId: todoList._id}).fetch()
    },
  },

  Mutation: {
    createTodoList(obj, args, { userId }) {
      if(!userId){
        return null
      }
      const _id = TodoLists.insert({ ...args, userId })
      return TodoLists.findOne({ _id })
    },
    deleteTodoList(obj, { _id }, { userId }) {
      if(!userId){
        return null
      }
      const removed = TodoLists.remove({ _id })
      console.log('Removed todo', removed)
      return true
    },
    updateTodoList(obj, { _id, name }, { userId }) {
      if(!userId){
        return null
      }
      console.log('args:', _id, name)
      TodoLists.update({ _id }, { '$set': { name } })
      return TodoLists.findOne({ _id })
    },
  }
}
