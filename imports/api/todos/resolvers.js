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
      console.log(Todos.findOne({ _id }));
      return Todos.findOne({ _id })
    },
    deleteTodo(obj, { _id }, context) {
      Todos.remove({ _id })
      return true
    },
    updateTodo(obj, { _id, name}, context) {
      console.log('args:', _id, name)
      Todos.update({ _id }, { name })
      return Todos.findOne({ _id })
    },
  }
}
