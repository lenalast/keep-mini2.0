import Todos from './todos.collection'

const todo = {
  _id: "asd",
  name: "asdddd"
}

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
      const _id = Todos.insert({ args })
      return Todos.findOne({ _id })
    }
  }
}
