'use strict'

const{ ApolloServer, gql } = require('apollo-server')
const port = process.env.PORT || 8080
const typeDefs = gql`
type Query {
    helloTrailblazers: String
    listAccounts(status:Status): [Account!]!
    }

type Account {
    name: String!
    status: Status
}

enum Status {
    ACTIVE
    INACTIVE
}
`
const accounts = [
    {
        name: 'Abhijit',
        status: 'INACTIVE'
    },
    {
        name: 'Criston',
        status: 'ACTIVE'
    }
]

const resolvers = {
    Query: {
        helloTrailblazers() {
            return 'Hey GraphQL!'
        },
        listAccounts(_, args){
            const { status} =args

            if (!status) return accounts

            return accounts.filter(a => a.status === status)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground:true,
    tracing:true
})

server.listen(port).then(({ url }) => {
    console.log(`Listening on ${url}`)

})
