// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // 브라우저 언어 감지
    const browserLang = navigator.language || navigator.userLanguage || '';
    
    let locale = 'en'; // 기본값: 영어
    
    if (browserLang.includes('ko')) {
      locale = 'ko';
    } else if (browserLang.includes('vi')) {
      locale = 'vi';
    }
    
    // 리다이렉트
    router.replace(`/${locale}`);
  }, [router]);

  return (
    <>
      <Head>
        <title>THE ZZIM | Loading...</title>
      </Head>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#0a0a0a'
      }}>
        <p style={{ color: '#ffffff', fontSize: '18px' }}>Loading...</p>
      </div>
    </>
  );
}
