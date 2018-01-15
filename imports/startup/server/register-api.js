import { createApolloServer } from 'meteor/apollo'
import { makeExecutableSchema } from 'graphql-tools'
import ResolutionsResolvers from '../../api/resolutions/resolvers'
import ResolutionSchema from '../../api/resolutions/Resolutions.graphql'
import merge from 'lodash/merge'
//Just a comment 
const QuerySchema = 
`
type Query {
  hi: String
  resolutions: [Resolution]
}
`

const typeDefs = [
QuerySchema,
ResolutionSchema
]

const resolver = {
  Query: {
    hi() {
      return 'Hello again world!'
    }
  }
}

const resolvers = merge(
  resolver, ResolutionsResolvers
)

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

createApolloServer({ schema })