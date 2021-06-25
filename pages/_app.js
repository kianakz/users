import '../styles/globals.css'
import Layout from './Components/Layout'
// This renders the pages
function MyApp({ Component, pageProps }) {

  return (
  <div>   
    <Layout><Component {...pageProps} /></Layout>
  </div>
  ) 

}

export default MyApp
