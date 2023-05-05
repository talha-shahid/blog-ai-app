import './globals.css'
import { Open_Sans } from 'next/font/google'
import Navbar from "app/(shared)/Navbar"
import Footer from './(shared)/Footer'

const openSans = Open_Sans({
  subsets: ["latin"]
})

export const metadata = {
  title: 'Blog AI App',
  description: 'Blog built in NextJS that uses AI to generate content',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
