import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function Home() {
  return (     
               
    <div className="content">     
      <Head>
        <title>Metal bands | Home</title>
        <meta name="keywords" content="metal"/>
      </Head>
      <h1 className= {styles.title} >Home Page</h1>   
      <p className= {styles.text}>I'll show you different metal bands</p>   
      <Link href="/bands/bandNames" className={styles.btn}> Band Names</Link>       
    </div>     
  )
}
