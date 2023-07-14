import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer';
import { DarkModeContextProvider } from "../context/DarkModeContext";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Winiar Dashboard',
  description: 'This is my page description',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DarkModeContextProvider>
          <div className="container">
            <Navbar/>
            {children}
            <Footer/>
          </div>
        </DarkModeContextProvider>
      </body>
    </html>
  )
}
