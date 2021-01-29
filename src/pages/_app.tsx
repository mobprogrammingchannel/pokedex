import { ThemeProvider } from 'styled-components'
import Reset from '../styles/reset'
import GlobalStyles from '../styles/global'
import Head from 'next/head'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const customConf = {
  mediaQuery: 'only screen',
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5,
  },
  gutterWidth: {
    xs: 1,
    sm: 2.125,
    md: 2.125,
    lg: 2.125,
    xl: 2.125,
  },
}

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokémon</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={{ awesomegrid: customConf }}>
          <Reset />
          <GlobalStyles />
          <Component {...pageProps} />
          <div id="modal-root" />
        </ThemeProvider>
      </ApolloProvider>
    </>
  )
}

export default MyApp
