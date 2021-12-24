import Layout from '../components/Layout'
import '../styles/globals.css'
// import '@themesberg/flowbite'

function MyApp({ Component, pageProps }) {
  return (<>
    <Layout> 
      <Component {...pageProps} />
    </Layout>
  </>
  )
}

export default MyApp
