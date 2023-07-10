import Layout from '@/common/Layout/Layout'
import "@/common/components/marketing/Carousel/StyledCarousel/StyleCarousel.css"
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
