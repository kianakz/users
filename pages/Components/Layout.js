import Navbar from "./Navbar"
import Footer from "./Footer"
import Head from "next/head"
const Layout=({children}) => {
    return(   
        <div className="content">
            <Head>
            <title>Metal bands | {children.title}</title>
            <meta name="keywords" content="metal"/>
            </Head>
            <Navbar/>
            {children}
            <Footer/>
        </div>        
    )
}
export default Layout