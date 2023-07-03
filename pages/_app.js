import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { UserProvider } from '@/context/userContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} font-sans`}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>

    </main>
  )
}
