import { ThemeProvider } from 'styled-components'
import Reset from '../styles/reset'
import GlobalStyles from '../styles/global'
import Head from 'next/head'

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

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pokémon</title>
      </Head>
      <ThemeProvider theme={{ awesomegrid: customConf }}>
        <Reset />
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
