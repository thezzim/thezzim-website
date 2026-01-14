// pages/vi/location.js
import Head from 'next/head';

export default function Location() {
  
  const copyGrabAddress = async () => {
    const address = '1B7 Đường Số 29, Khu Phố 5, Thủ Đức';
    try {
      await navigator.clipboard.writeText(address);
      alert('Đã sao chép địa chỉ!');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Đã sao chép địa chỉ!');
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/2S3VxBzHiDFiWRXe6', '_blank');
  };

  return (
    <>
      <Head>
        <title>Vị Trí & Giờ Mở Cửa | THE ZZIM Quận 2 An Phú Gần Estella Place</title>
        <meta name="description" content="Vị trí THE ZZIM: An Phú Quận 2, cách Estella Place 2 phút đi bộ. Địa chỉ: 1B7 Đường Số 29, Khu Phố 5, Thủ Đức. Giờ mở cửa: 11:00-22:00. Giờ nghỉ: 14:30-16:30 (Thứ 2-5). Có thể sao chép địa chỉ Grab." />
        <meta name="keywords" content="THE ZZIM vị trí, THE ZZIM địa chỉ, nhà hàng Hàn Quốc Quận 2, nhà hàng Hàn Quốc An Phú, Estella Place nhà hàng, Korean restaurant District 2, Thủ Đức Korean restaurant" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content="Vị Trí & Giờ Mở Cửa | THE ZZIM Quận 2 An Phú" />
        <meta property="og:description" content="An Phú Quận 2, cách Estella Place 2 phút đi bộ. Giờ mở cửa 11:00-22:00." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361058/location-hero-the-zzim-store-exterior-ho-chi-minh-district-2-an-phu.webp" />
        <meta property="og:url" content="https://thezzimvn.com/vi/location" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="vi_VN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vị Trí & Giờ Mở Cửa | THE ZZIM Quận 2 An Phú" />
        <meta name="twitter:description" content="An Phú Quận 2, cách Estella Place 2 phút đi bộ. Giờ mở cửa 11:00-22:00." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361058/location-hero-the-zzim-store-exterior-ho-chi-minh-district-2-an-phu.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/vi/location" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361058/location-hero-the-zzim-store-exterior-ho-chi-minh-district-2-an-phu.webp" 
          alt="Vị trí THE ZZIM"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">THE ZZIM</p>
          <h1 className="hero-title">VỊ TRÍ</h1>
          <p className="hero-description">Gặp nhau tại An Phú Quận 2</p>
          <a href="tel:+84825251004" className="hero-cta">Đặt bàn ngay</a>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="section-container">
          <p className="section-subtitle">Vị Trí</p>
          <h2 className="section-title" id="location-title">An Phú Quận 2<br />Cách Estella Place 2 phút</h2>

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
                title="Vị trí THE ZZIM trên bản đồ"
              ></iframe>
              <button className="map-btn" onClick={openGoogleMaps}>Mở Google Maps</button>
            </div>

            <div className="location-info">
              <h3>The Zzim - Nhà Hàng Sườn Bò Hầm Cay</h3>
              <p className="location-address">1B7 Đường Số 29, Khu Phố 5, Thủ Đức</p>
              
              <button className="grab-btn" onClick={copyGrabAddress}>Sao chép địa chỉ Grab</button>

              <div className="location-hours">
                <h4>Giờ mở cửa</h4>
                <p className="hours-main">Thứ 2 - Thứ 5: 11:00 - 22:00</p>
                <p className="hours-break">Giờ nghỉ: 14:30 - 16:30</p>
                <p className="hours-main">Thứ 6 - CN: 11:00 - 22:00</p>
              </div>

              <div className="location-contact">
                <h4>Liên hệ</h4>
                <p>Hotline / Zalo: <a href="tel:+84825251004">+84 82 525 1004</a></p>
              </div>

              <button className="map-link-btn" onClick={openGoogleMaps}>Mở Google Maps</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
