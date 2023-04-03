import Head from 'next/head'
import { Inter } from 'next/font/google'
import ButtonOne from '@/components/button'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Attendr</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40'>
        <h1>hello</h1>
        <ButtonOne />








      </main>
    </>
  )
}
