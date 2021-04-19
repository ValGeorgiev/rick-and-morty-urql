import { Provider } from 'urql'
import client from '../utils/graphqlClient'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  ) 
}

export default MyApp
