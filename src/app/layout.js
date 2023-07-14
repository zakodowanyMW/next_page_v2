import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer';
import { DarkModeContextProvider } from "../context/DarkModeContext";
import AuthProvider from '@/components/AuthProvider/AuthProvider';

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
          <AuthProvider>
            <div className="container">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </DarkModeContextProvider>
      </body>
    </html>
  )
}
