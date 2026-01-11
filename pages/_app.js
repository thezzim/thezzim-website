// pages/_app.js
import '../styles/globals.css';
import '../styles/mobile-tweaks.css';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&display=swap" 
          rel="stylesheet" 
          media="print"
          onLoad="this.media='all'"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <FloatingButtons />
    </>
  );
}
