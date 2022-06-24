import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { SUBGRAPH_BASE_URL } from 'src/constants'

import { GraphQLClient } from 'graphql-request'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://graph.hotcross.dev/subgraphs/name/bttc-dex`
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const governanceClient = new ApolloClient({
  link: new HttpLink({
    uri: `${SUBGRAPH_BASE_URL}/governance`
  }),
  cache: new InMemoryCache(),
  shouldBatch: true
})

export const mininchefV2Client = new GraphQLClient('https://graph.hotcross.dev/subgraphs/name/bttc-minichefv2', {
  headers: {}
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://graph.hotcross.dev/subgraphs/name/bttc-blocks'
  }),
  cache: new InMemoryCache()
})
