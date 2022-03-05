import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Verst.io | First Class Software</title>
        <meta name="description" content="Verst is a tech studio designed to build new things." />
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
