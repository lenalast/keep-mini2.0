import Todos from './todos.collection'

export default {
  Query: {
    todos: (obj, args, { userId }) => {
      if(!userId){
        return null
      }
      return Todos.find({}).fetch()
    },
    todo: (_, {_id}, { userId }) => {
      if(!userId){
        return null
      }
      return Todos.findOne({ _id })
    },
  },

  Mutation: {
    createTodo(obj, args, { userId }) {
      if(!userId){
        return null
      }
      const _id = Todos.insert({ ...args, done: false })
      console.log(Todos.findOne({ _id }));
      return Todos.findOne({ _id })
    },
    deleteTodo(obj, { _id }, { userId }) {
      if(!userId){
        return null
      }
      Todos.remove({ _id })
      return true
    },
    updateTodo(obj, { _id, name}, { userId }) {
      if(!userId){
        return null
      }
      console.log('args:', _id, name)
      Todos.update({ _id }, { '$set': { name } })
      return Todos.findOne({ _id })
    },
    updateTodoStatus(obj, { _id, done}, { userId }) {
      if(!userId){
        return null
      }
      console.log('args:', _id, done)
      Todos.update({ _id }, { '$set': { done } })
      return Todos.findOne({ _id })
    },
  }
}
