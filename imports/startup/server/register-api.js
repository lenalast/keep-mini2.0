import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import TodoListSchema from '../../api/todolists/TodoList.graphql.js'
import TodoListResolvers from '../../api/todolists/resolvers'
import TodoSchema from '../../api/todos/Todo.graphql.js';
import TodoResolvers from '../../api/todos/resolvers';

// hmmdd

const typeDefs = [
  TodoListSchema,
  TodoSchema,
]

const resolvers = merge(
  TodoListResolvers,
  TodoResolvers,
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })