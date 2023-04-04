import '../styles/login-page.scss'
import '../styles/globals.scss'
import '../styles/signup-page.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
