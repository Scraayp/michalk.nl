import Head from 'next/head'
import Navbar from './components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Michal | Student Software Developer.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <Navbar />
    </>
  )
}