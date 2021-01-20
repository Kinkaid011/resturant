import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import About from '../components/About'
import Menu from '../components/Menu'
import Gallery from '../components/Gallery'
import Guestbook from '../components/Guestbook'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunny Side</title>  
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Sofia&display=swap" rel="stylesheet" />
      </Head>

      <Header />
      <div className={styles.container}>
        <About />
        <Menu />
        <Gallery />
        <Guestbook />  
      </div>
      <Footer />     
    </div>
  )
}
