import Todos from './todos.collection'

export default {
  Query: {
    todos: () => {
      return Todos.find({}).fetch()
    },
    todo: (_, {_id}) => {
      return Todos.findOne({ _id })
    },
  },

  Mutation: {
    createTodo(obj, args, context) {
      const _id = Todos.insert({ ...args })
      return Todos.findOne({ _id })
    },
    deleteTodo(obj, args, context) {
      const _id = Todos.remove({ ...args })
      return console.log('Removed todo')
    },
    updateTodo(obj, { _id, name}, context) {
      console.log('args:', _id, name)
      const id = Todos.update({ _id }, { name })
      return Todos.findOne({ id })
    }
  }
}
