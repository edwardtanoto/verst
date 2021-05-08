import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Verst.io</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className="container">
        <div className="wrapper">
          <div className="home">
            <Hero />
          </div>
        </div>
      </div>
    </>
  )
}
