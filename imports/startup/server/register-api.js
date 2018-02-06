import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import merge from 'lodash/merge'

import TodoListSchema from '../../api/todolists/TodoList.graphql.js'
import TodoListResolvers from '../../api/todolists/resolvers'
import TodoSchema from '../../api/todos/Todo.graphql.js';
import TodoResolvers from '../../api/todos/resolvers';
import UserSchema from '../../api/users/User.graphql.js';
import UserResolvers from '../../api/users/resolvers';

// hmmddffff

const typeDefs = [
  TodoListSchema,
  TodoSchema,
  UserSchema,
]

const resolvers = merge(
  TodoListResolvers,
  TodoResolvers,
  UserResolvers,
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })