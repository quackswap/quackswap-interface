import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { SUBGRAPH_BASE_URL } from 'src/constants'

import { GraphQLClient } from 'graphql-request'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `${SUBGRAPH_BASE_URL}/bttc-dex`
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

// export const governanceClient = new ApolloClient({
//   link: new HttpLink({
//     uri: `${SUBGRAPH_BASE_URL}/governance`
//   }),
//   cache: new InMemoryCache(),
//   shouldBatch: true
// })

export const masterchefClient = new GraphQLClient(`${SUBGRAPH_BASE_URL}/bttc-masterchef`, {
  headers: {}
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: `${SUBGRAPH_BASE_URL}/bttc-blocks`
  }),
  cache: new InMemoryCache()
})
