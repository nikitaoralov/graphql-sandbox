import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// types
import { typeDefs } from './schema.js'

// db
import db from './_db.js'

// server setup
const server = new ApolloServer({
    typeDefs,
    resolvers: {
        Query: {
            games: () => db.games,
            reviews: () => db.reviews,
            authors: () => db.authors
        }
    }
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('Server ready at port: ', 4000)