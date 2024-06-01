import { Inter } from "next/font/google";
import "./globals.css";
import "../assets/css/bootstrap.css";
import "../assets/css/bootstrapIcon.css";
import "../assets/css/boxicon.min.css";
import "../assets/css/remix.css";
import "../assets/css/swiper.bundle.min.css";
import "./globals.css";
import Script from "next/script";
import {logo} from '../assets/images/logo.png'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LiftUpServices",
  description: "At LiftUpServices, we're dedicated to empowering businesses through cutting-edge digital marketing, SEO, and WordPress solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <meta property="og:image" content={logo} />
      <body className={inter.className}>{children}
    
      </body>
{/* 
      <Script src="../../public/customjs/main.js"  />
        <Script src='../../public/customjs/aos.js'    />
        <Script src="../../public/customjs/jlightbox.js"   />
        <Script src="../../public/customjs/pure_counter.js"   /> */}
    </html>
  );
}
