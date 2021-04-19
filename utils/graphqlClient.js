import { createClient, defaultExchanges } from 'urql'
import { devtoolsExchange } from '@urql/devtools'

const client = createClient({
  url: 'https://rickandmortyapi.com/graphql',
  exchanges: [devtoolsExchange, ...defaultExchanges]
})

export default client