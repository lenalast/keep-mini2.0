import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import TodosResolvers from '../../api/todos/todo.resolvers'
import TodoSchema from '../../api/todos/todos.graphql.js'
import merge from 'lodash/merge'
//Just a comment..

const typeDefs = [
TodoSchema
]

const resolvers = merge(
  TodosResolvers
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })