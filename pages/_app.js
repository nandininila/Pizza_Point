import { Provider } from 'react-redux'
import Layout from '../common/Layout/Layout'
import "../common/components/marketing/Carousel/StyledCarousel/css/StyleCarousel.css"
import '../common/styles/globals.css'
import store from '../redux/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
