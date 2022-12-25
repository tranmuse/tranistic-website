import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TranMuse</title>
        <meta name="description" content="AI Artist | Motion Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
      <Projects />
      <About />
      
      
    </div>
  )
}
