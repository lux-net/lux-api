import { Router } from 'express'
import graphqlHTTP from 'express-graphql'
import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './schema'
import resolvers from './resolvers'

export default () => {
  const router = new Router()
  const schema = makeExecutableSchema({ typeDefs, resolvers })
  router.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
  return router
}
