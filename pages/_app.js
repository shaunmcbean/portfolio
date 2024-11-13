import '../styles/custom.global.scss'
import { Header } from '../components/Header'
import { SEO } from '../config/config'

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header seo={SEO} />
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
