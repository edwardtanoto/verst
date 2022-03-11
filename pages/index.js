import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Verst, Inc.</title>
        <meta name="description" content="Verst is a holding company focusing to build creative projects in technology to impact society." />
        <link rel="icon" href="/favicon.ico" />
<meta name="title" content="Verst, Inc."/>
<meta name="description" content="Verst is a holding company focusing to build creative projects in technology to impact society."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://www.verst.io/"/>
<meta property="og:title" content="Verst, Inc."/>
<meta property="og:description" content="Verst is a holding company focusing to build creative projects in technology to impact society."/>
<meta property="og:image" content="https://verst.io/cover.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://www.verst.io/"/>
<meta property="twitter:title" content="Verst, Inc."/>
<meta property="twitter:description" content="Verst is a holding company focusing to build creative projects in technology to impact society."/>
<meta property="twitter:image" content="https://verst.io/cover.png"/>
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
