import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tranistic</title>
        <meta name="description" content="AI Artist | Motion Graphic Designer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </div>
  )
}
