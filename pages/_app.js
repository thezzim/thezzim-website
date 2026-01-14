// pages/_app.js
import '../styles/globals.css';
import '../styles/mobile-tweaks.css';
import '../styles/floating-buttons-tweaks.css';
import '../styles/magazine-tweaks.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const HEADER_OFFSET = 80;

    const scrollToHash = () => {
      if (typeof window === 'undefined') return;
      const hash = window.location.hash;
      if (!hash) return;

      const id = decodeURIComponent(hash.slice(1));
      const el = document.getElementById(id);
      if (!el) return;

      const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    };

    const onRouteDone = () => {
      // 페이지 렌더 후 엘리먼트가 생긴 다음 이동하도록 한 템포 늦춤
      setTimeout(scrollToHash, 0);
    };

    // 초기 진입(/menu#... 같은 경우)
    onRouteDone();

    router.events.on('routeChangeComplete', onRouteDone);
    router.events.on('hashChangeComplete', onRouteDone);
    return () => {
      router.events.off('routeChangeComplete', onRouteDone);
      router.events.off('hashChangeComplete', onRouteDone);
    };
  }, [router.events]);

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
