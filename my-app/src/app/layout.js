import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import './globals.css'
import {Roboto} from 'next/font/google'
import Link from 'next/link';

export const metadata = {
  title: 'Bildy App',
  description: 'Gestiona tus albaranes',
  keywords: "tienda, online, ecommerce"
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"]
  });  

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>

  )

}


