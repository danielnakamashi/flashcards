import * as React from 'react'
import type { AppProps } from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline'

function NextApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}

export default NextApp
