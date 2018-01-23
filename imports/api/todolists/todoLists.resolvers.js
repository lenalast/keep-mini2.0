import TodoLists from './todoLists.collection'

export default {
  Query: {
    todos: () => {
      return TodoLists.find({}).fetch()
    },
    todo: (_, {_id}) => {
      return TodoLists.findOne({ _id })
    },
  },

  Mutation: {
    createTodo(obj, args, context) {
      const _id = TodoLists.insert({ ...args })
      return TodoLists.findOne({ _id })
    },
    deleteTodo(obj, args, context) {
      const _id = TodoLists.remove({ ...args })
      return console.log('Removed todo')
    },
    updateTodo(obj, { _id, name}, context) {
      console.log('args:', _id, name)
      TodoLists.update({ _id }, { name })
      return TodoLists.findOne({ _id })
    }
  }
}
