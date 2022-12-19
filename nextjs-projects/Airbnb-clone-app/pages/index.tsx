import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/organisms/Header'

const Home: NextPage = () => {
  return (
    <>
     <Head>
        <title>Airbnb-clone-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </>  
  )
}

export default Home
