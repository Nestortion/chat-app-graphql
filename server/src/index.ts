import express from 'express'
import { createSchema, createYoga } from 'graphql-yoga'
import { types } from './graphql/types'
import { resolvers } from './graphql/resolvers'

const app = express()

const yoga = createYoga({
	graphqlEndpoint: '/graphql', schema: createSchema({
		typeDefs: types,
		resolvers: resolvers
	})
})

app.use(yoga.graphqlEndpoint, yoga)


app.listen(3000, () => console.log('server is running on port 3000'))
