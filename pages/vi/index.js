// pages/vi/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// Dữ liệu Set Menu
const setMenuData = [
  {
    name: 'The Zzim Combo 1',
    description: 'Sườn bò hầm (Nhỏ)+Sườn heo phô mai (Nhỏ)+Chân gà rút xương cháy tỏi+Canh kimchi+Salad ức vịt',
    price: '1,199,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539951/menu-combo-01-the-zzim-signature-premium-galbijjim-set.webp'
  },
  {
    name: 'Best Combo',
    description: 'Sườn bò hầm (Trung)+Sườn heo phô mai (Trung)+Chân gà rút xương chua ngọt+Canh tương đậu+Salad hải sản',
    price: '1,599,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539476/menu-combo-02-best-seller-family-dining-set-recommend.webp'
  },
  {
    name: 'Couple Combo 1',
    description: 'Sườn bò hầm (Nhỏ)+Cơm trộn thố+Canh kimchi+Salad ức vịt',
    price: '799,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539476/menu-couple-combo-set-for-two-date-night-combo-1-nguoi.webp'
  }
];

// Dữ liệu món lẻ
const singleMenuData = [
  {
    name: 'Sườn Bò Hầm Cay Khổng Lồ',
    options: [
      { label: 'Nhỏ (3 xương)', price: '499,000đ' },
      { label: 'Trung (5 xương)', price: '699,000đ' },
      { label: 'Lớn (9 xương)', price: '1,199,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp'
  },
  {
    name: 'Sườn Heo Phô Mai',
    options: [
      { label: 'Nhỏ (4 xương, phô mai 150g)', price: '359,000đ' },
      { label: 'Trung (8 xương, phô mai 200g)', price: '459,000đ' },
      { label: 'Lớn (12 xương, phô mai 300g)', price: '559,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361080/menu-item-02-cheese-pork-back-ribs-suon-heo-pho-mai.webp'
  },
  {
    name: 'Chân Gà Rút Xương',
    options: [
      { label: 'Cháy tỏi', price: '259,000đ' },
      { label: 'Chua ngọt', price: '259,000đ' },
      { label: 'Cay', price: '259,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361081/menu-item-03-spicy-boneless-chicken-feet-chan-ga-rut-xuong.webp'
  }
];

// Dữ liệu đánh giá
const reviewData = [
  {
    name: 'KE***',
    rating: 5,
    text: '"Vị trí quán rất thuận tiện, dễ tìm và chỗ đậu xe cũng thoải mái nữa. Không gian bên trong sạch sẽ, ngăn nắp, các bạn nhân viên thì cực kỳ nhiệt tình. Đồ ăn thực sự rất ngon nên mình rất muốn giới thiệu cho mọi người. Đặc biệt là sườn bò và chân gà rút xương, nhất định phải thử nha..."',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361090/review-01-signature-beef-galbijjim-suon-bo-ham.webp'
  },
  {
    name: 'Ja***',
    rating: 5,
    text: '"Sườn Bò Hầm Cay khiến bạn nhớ ngay đến Hàn Quốc! Trước khi ăn, quán sẽ phục vụ đậu hũ non. Sườn Bò Hầm Cay không hề bị dai mà rất chắc thịt. Vị ngọt và cay hòa quyện khiến mình cứ muốn ăn mãi..."',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361092/review-02-fried-rice-bokkeumbap-com-chien-han-quoc.webp'
  },
  {
    name: 'R***',
    rating: 5,
    text: '"Sườn bò vừa cho vào miệng là tan ngay luôn... thịt mềm như nhừ vậy đó, thật sự không hề dai một chút nào. Và món sụn heo (odol-byeo) thì ngon nhức nách..."',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361093/review-03-spicy-pork-cartilage-sun-heo-xao-cay.webp'
  }
];

// Dữ liệu truyền thông
const broadcastData = [
  { title: 'Prison Playbook', subtitle: 'Featured Spicy Galbijjim', channel: 'tvN', year: '2017', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361048/media-03-netflix-k-drama-prison-playbook-featured.webp' },
  { title: 'Siksin Road', subtitle: 'Giant Size Special', channel: 'Y-STAR', year: '2014', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361046/media-01-siksin-road-gourmet-variety-show.webp' },
  { title: 'Find Delicious TV', subtitle: 'Ribs Special Winner', channel: 'MBC', year: '2015', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361046/media-02-mbc-find-delicious-tv-best-korean-restaurant.webp' },
  { title: 'Mr. House Husband', subtitle: 'Tập vợ chồng Min Woo-hyuk, Lee Se-mi', channel: 'KBS2', year: '2017', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361050/media-04-kbs-mr-house-husband-season2.webp' },
  { title: 'Live Today Evening', subtitle: 'Galbijjim khổng lồ', channel: 'MBC', year: '2016', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361051/media-05-mbc-live-today-evening-news.webp' },
];

const broadcastListData = [
  { title: 'Ssaengsaeng Information', subtitle: 'Tập đặc biệt Galbijjim cay', channel: 'KBS2', year: '2014' },
  { title: 'Super Junior M Guest House', subtitle: 'Nhà hàng sao', channel: 'SBS', year: '2014' },
  { title: "Sisters' Choice", subtitle: 'Cuộc chiến vị cay', channel: 'MBN', year: '2015' },
];

export default function Home() {
  const [menuTab, setMenuTab] = useState('set');
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  const openReserveModal = (e) => {
    e.preventDefault();
    setReserveModalOpen(true);
  };

  const closeReserveModal = () => {
    setReserveModalOpen(false);
  };

  const copyGrabAddress = async () => {
    const address = '1B7 Đường Số 29, Khu Phố 5, Thủ Đức, Thành phố Hồ Chí Minh 71106';
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
        <title>THE ZZIM | Nhà hàng Hàn Quốc chuyên Sườn Bò Hầm Cay tại Quận 2</title>
        <meta name="description" content="THE ZZIM - Nhà hàng Hàn Quốc nổi tiếng từ Gangnam, Seoul. Chuyên sườn bò hầm cay khổng lồ tại An Phú, Quận 2. Từng xuất hiện trên Prison Playbook, Siksin Road. Google 4.7 sao." />
        <meta name="keywords" content="THE ZZIM, sườn bò hầm, galbijjim, nhà hàng Hàn Quốc, Quận 2, An Phú, TP.HCM, Estella Place, Korean restaurant" />
        
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content="THE ZZIM | Nhà hàng Hàn Quốc chuyên Sườn Bò Hầm Cay" />
        <meta property="og:description" content="Nhà hàng Hàn Quốc nổi tiếng từ Gangnam. Sườn bò hầm cay khổng lồ tại An Phú, Quận 2." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp" />
        <meta property="og:url" content="https://thezzimvn.com/vi" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="vi_VN" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE ZZIM | Nhà hàng Hàn Quốc chuyên Sườn Bò Hầm Cay" />
        <meta name="twitter:description" content="Nhà hàng Hàn Quốc nổi tiếng từ Gangnam. Sườn bò hầm cay tại Quận 2." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/vi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_70,w_800/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp"
          alt="Sườn bò hầm cay THE ZZIM"
          className="hero-background"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Sườn Bò Hầm Cao Cấp</p>
          <h1 className="hero-title">THE ZZIM</h1>
          <p className="hero-description">
            <span className="hero-description-bold">Huyền thoại sườn bò hầm từ Gangnam,</span>{' '}
            <span className="hero-description-normal">nay đã có mặt tại An Phú, Quận 2.</span>
          </p>
          <a href="#" className="hero-cta" onClick={openReserveModal}>Đặt bàn ngay</a>
        </div>
      </section>

      {/* Reserve Modal */}
      {reserveModalOpen && (
        <>
          <div className="reserve-modal-overlay" onClick={closeReserveModal}></div>
          <div className="reserve-modal">
            <h2 className="reserve-modal-title">Chọn kênh đặt bàn</h2>
            <p className="reserve-modal-description">Vui lòng chọn phương thức liên hệ.</p>
            
            <div className="reserve-modal-buttons">
              <a 
                href="https://zalo.me/0825251004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="reserve-modal-btn reserve-modal-btn-zalo"
                onClick={closeReserveModal}
              >
                <div className="reserve-modal-icon">
                  <img 
                    src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766883925/zalo.png" 
                    alt="Zalo" 
                    style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                  />
                </div>
                <span>Đặt bàn qua Zalo</span>
              </a>
              
              <a 
                href="tel:+84825251004" 
                className="reserve-modal-btn reserve-modal-btn-phone"
                onClick={closeReserveModal}
              >
                <div className="reserve-modal-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <span>Đặt bàn qua điện thoại</span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* Menu Section */}
      <section className="menu-section">
        <div className="section-container">
          <p className="section-subtitle">Đặc trưng</p>
          <h2 className="section-title">Món ngon đặc biệt THE ZZIM</h2>
          
          <div className="menu-tabs">
            <div className="menu-tabs-wrapper">
              <button 
                className={`menu-tab ${menuTab === 'set' ? 'active' : ''}`}
                onClick={() => setMenuTab('set')}
              >
                Set Menu
              </button>
              <button 
                className={`menu-tab ${menuTab === 'single' ? 'active' : ''}`}
                onClick={() => setMenuTab('single')}
              >
                Món lẻ
              </button>
            </div>
          </div>

          <div className="menu-grid">
            {menuTab === 'set' ? (
              setMenuData.map((item, index) => (
                <div key={index} className="menu-card">
                  <div className="menu-card-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="menu-card-content">
                    <h3>{item.name}</h3>
                    <p className="menu-description">{item.description}</p>
                    <div className="menu-card-footer">
                      <span className="menu-price">{item.price}</span>
                      <Link href="/vi/menu#menu-tabs" className="menu-more-btn">Xem thêm</Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              singleMenuData.map((item, index) => (
                <div key={index} className="menu-card">
                  <div className="menu-card-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                  </div>
                  <div className="menu-card-content">
                    <h3>{item.name}</h3>
                    <div className="menu-options">
                      {item.options.map((opt, i) => (
                        <div key={i} className="menu-option">
                          <span>
                            <span className="menu-bullet">·</span>
                            {opt.label}
                          </span>
                          <span className="menu-option-price">{opt.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="menu-card-footer">
                      <Link href="/vi/menu?tab=single#menu-tabs" className="menu-more-btn">Xem thêm</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <p className="vat-notice">※Giá trên chưa bao gồm thuế GTGT (VAT) theo quy định của pháp luật Việt Nam.</p>
        </div>
      </section>

      {/* Review Section */}
      <section className="review-section">
        <div className="section-container">
          <p className="section-subtitle">Đánh giá</p>
          <h2 className="section-title">Khách hàng nói gì về chúng tôi</h2>
          <p className="review-rating">Google 4.7 sao (503 đánh giá)</p>

          <div className="review-grid">
            {reviewData.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-image">
                  <img src={review.image} alt="Hình ảnh đánh giá" loading="lazy" />
                </div>
                <div className="review-content">
                  <div className="review-header">
                    <span className="review-name">{review.name}</span>
                    <span className="review-stars">{'★'.repeat(review.rating)}</span>
                  </div>
                  <p className="review-text">{review.text}</p>
                </div>
              </div>
            ))}
          </div>

          <a href="https://maps.app.goo.gl/2S3VxBzHiDFiWRXe6" target="_blank" rel="noopener noreferrer" className="google-review-link">
            Xem thêm đánh giá trên Google →
          </a>
        </div>
      </section>

      {/* Broadcast Section */}
      <section className="broadcast-section">
        <div className="section-container">
          <p className="section-subtitle">Truyền thông & Báo chí</p>
          <h2 className="section-title">The Zzim trên truyền hình</h2>

          <div className="broadcast-grid">
            {broadcastData.map((item, index) => (
              <div key={index} className="broadcast-card">
                <div className="broadcast-image">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </div>
                <div className="broadcast-content">
                  <h3>'{item.title}'</h3>
                  <p className="broadcast-subtitle">{item.subtitle}</p>
                  <p className="broadcast-info">{item.channel} | {item.year}</p>
                </div>
              </div>
            ))}
            
            <div className="broadcast-card broadcast-list-card">
              {broadcastListData.map((item, index) => (
                <div key={index} className="broadcast-list-item">
                  <h3>'{item.title}'</h3>
                  <p className="broadcast-subtitle">{item.subtitle}</p>
                  <p className="broadcast-info">{item.channel} | {item.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="section-container">
          <p className="section-subtitle">Vị trí</p>
          <h2 className="section-title">An Phú, Quận 2, TP.HCM<br />Cách Estella Place 2 phút</h2>

          <div className="location-content">
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.151669913686!2d106.74431137583852!3d10.79969335876248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527615354ebb9%3A0x89c8e142ec7e79ac!2zVEhFIFpaSU0gLSBOaMOgIGjDoG5nIEjDoG4gUXXhu5FjIChTxrDhu51uIELDsiBI4bqnbSk!5e0!3m2!1svi!2s!4v1767993052469!5m2!1svi!2s"
                width="100%" 
                height="400" 
                style={{border: 0, borderRadius: '12px'}} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bản đồ vị trí THE ZZIM"
              ></iframe>

              <button className="map-btn" onClick={openGoogleMaps} aria-label="Mở Google Maps">
                Mở Google Maps
              </button>
            </div>

            <div className="location-info">
              <h3>THE ZZIM chuyên Sườn bò hầm cay</h3>
              <p className="location-address">1B7 Đường Số 29, Khu Phố 5, Thủ Đức, Thành phố Hồ Chí Minh 71106</p>
              
              <button className="grab-btn" onClick={copyGrabAddress} aria-label="Sao chép địa chỉ Grab">
                Sao chép địa chỉ Grab
              </button>

              <div className="location-hours">
                <h4>Giờ mở cửa</h4>
                <p className="hours-main">T2-T5: 11:00 - 22:00</p>
                <p className="hours-break">Nghỉ trưa: 14:30 - 16:30</p>
                <p className="hours-main">T6-CN: 11:00 - 22:00</p>
              </div>

              <div className="location-contact">
                <h4>Liên hệ</h4>
                <p>Hotline / Zalo: <a href="tel:+84825251004">+84 82 525 1004</a></p>
              </div>

              <button className="map-link-btn" onClick={openGoogleMaps} aria-label="Mở Google Maps">
                Xem trên Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}