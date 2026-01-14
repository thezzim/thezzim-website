// pages/location.js
import Head from 'next/head';

export default function Location() {
  
  // Grab 주소 복사 함수
  const copyGrabAddress = async () => {
    const address = '1B7 Đường Số 29, Khu Phố 5, Thủ Đức';
    try {
      await navigator.clipboard.writeText(address);
      alert('주소가 클립보드에 복사되었습니다!');
    } catch (err) {
      // 클립보드 API가 지원되지 않는 경우 대체 방법
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('주소가 클립보드에 복사되었습니다!');
    }
  };

  // 구글 지도 열기 함수
  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/2S3VxBzHiDFiWRXe6', '_blank');
  };

  return (
    <>
      <Head>
  {/* 기본 메타 */}
  <title>위치 및 영업시간 | THE ZZIM 호치민 2군 안푸 Estella Place 근처</title>
  <meta name="description" content="THE ZZIM 위치: 호치민 2군 안푸, Estella Place에서 도보 2분. 주소: 1B7 Đường Số 29, Khu Phố 5, Thủ Đức. 영업시간: 11:00-22:00. 브레이크타임: 14:30-16:30 (월-목). Grab 주소 복사 가능. 강남 3대 갈비찜 호치민점." />
  <meta name="keywords" content="더찜 위치, 더찜 주소, THE ZZIM location, 호치민 2군 한식당, 안푸 한식당, Estella Place 맛집, 호치민 한식당 위치, 호치민 2군 맛집 위치, nhà hàng Hàn Quốc An Phú, Korean restaurant District 2, Thủ Đức Korean restaurant" />
  
  {/* Open Graph */}
  <meta property="og:type" content="restaurant" />
  <meta property="og:title" content="위치 및 영업시간 | THE ZZIM 호치민 2군 안푸" />
  <meta property="og:description" content="호치민 2군 안푸, Estella Place 도보 2분. 영업시간 11:00-22:00. 강남 3대 갈비찜 호치민점." />
  <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361058/location-hero-the-zzim-store-exterior-ho-chi-minh-district-2-an-phu.webp" />
  <meta property="og:url" content="https://thezzimvn.com/ko/location" />
  <meta property="og:site_name" content="THE ZZIM 더찜" />
  <meta property="og:locale" content="ko_KR" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="위치 및 영업시간 | THE ZZIM 호치민 2군 안푸" />
  <meta name="twitter:description" content="호치민 2군 안푸, Estella Place 도보 2분. 영업시간 11:00-22:00." />
  <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361058/location-hero-the-zzim-store-exterior-ho-chi-minh-district-2-an-phu.webp" />
  
  {/* SEO */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content="THE ZZIM" />
  <link rel="canonical" href="https://thezzimvn.com/ko/location" />
</Head>


      {/* 히어로 섹션 */}
<section className="hero">
  <img 
    src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361058/location-hero-the-zzim-store-exterior-ho-chi-minh-district-2-an-phu.webp" 
    alt="THE ZZIM 매장위치"
    className="hero-background"
  />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <p className="hero-subtitle">THE ZZIM</p>
    <h1 className="hero-title">LOCATION</h1>
    <p className="hero-description">호치민 2군 안푸에서 만나요</p>
    <a href="tel:+84825251004" className="hero-cta">지금 예약하기</a>
  </div>
</section>


      {/* 위치 섹션 */}
      <section className="location-section">
        <div className="section-container">
          <p className="section-subtitle">위치</p>
          <h2 className="section-title" id="location-title">호치민 2군 안푸<br />에스텔라 몰(Estella Place)에서 2분 거리</h2>

          <div className="location-content">
            <div className="location-map" id="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.151669913686!2d106.74431137583852!3d10.79969335876248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527615354ebb9%3A0x89c8e142ec7e79ac!2zVEhFIFpaSU0gLSBOaMOgIGjDoG5nIEjDoG4gUXXhu5FjIChTxrDhu51uIELDsiBI4bqnbSk!5e0!3m2!1sko!2s!4v1767993052469!5m2!1sko!2s"
                width="100%" 
                height="400" 
                style={{border: 0, borderRadius: '12px'}} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <button className="map-btn" onClick={openGoogleMaps}>구글 지도로 열기</button>
            </div>

            <div className="location-info">
              <h3>The Zzim 매운 갈비찜 전문점</h3>
              <p className="location-address">1B7 Đường Số 29, Khu Phố 5, Thủ Đức</p>
              
              <button className="grab-btn" onClick={copyGrabAddress}>Grab 주소 복사</button>

              <div className="location-hours">
                <h4>영업시간</h4>
                <p className="hours-main">월-목: 11:00 - 22:00</p>
                <p className="hours-break">브레이크 타임: 14:30 - 16:30</p>
                <p className="hours-main">금-일: 11:00 - 22:00</p>
              </div>

              <div className="location-contact">
                <h4>연락처</h4>
                <p>Hotline / Zalo: <a href="tel:+84825251004">+84 82 525 1004</a></p>
              </div>

              <button className="map-link-btn" onClick={openGoogleMaps}>구글 지도로 열기</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
