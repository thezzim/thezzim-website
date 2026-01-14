// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// 세트 메뉴 데이터
const setMenuData = [
  {
    name: 'The Zzim Combo 1',
    description: '소갈비찜 반판+치즈등갈비(소)+마늘무뼈닭발+김치찌개+오리가슴살 샐러드',
    price: '1,199,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539951/menu-combo-01-the-zzim-signature-premium-galbijjim-set.webp'
  },
  {
    name: 'Best Combo',
    description: '소갈비찜 한판+치즈등갈비(중)+유자무뼈닭발+우삼겹된장탕+해산물샐러드',
    price: '1,599,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539476/menu-combo-02-best-seller-family-dining-set-recommend.webp'
  },
  {
    name: 'Couple Combo 1',
    description: '소갈비찜 반판+돌솥비빔밥+김치찌개+오리가슴살샐러드',
    price: '799,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539476/menu-couple-combo-set-for-two-date-night-combo-1-nguoi.webp'
  }
];

// 단품 메뉴 데이터
const singleMenuData = [
  {
    name: '대왕소등갈비찜',
    options: [
      { label: '반판(뼈3대)', price: '499,000đ' },
      { label: '한판(뼈5대)', price: '699,000đ' },
      { label: '두판(뼈9대)', price: '1,199,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp'
  },
  {
    name: '치즈돼지등갈비',
    options: [
      { label: '소 (뼈4대, 치즈 150g)', price: '359,000đ' },
      { label: '중 (뼈8대, 치즈 200g)', price: '459,000đ' },
      { label: '대 (뼈12대, 치즈 300g)', price: '559,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361080/menu-item-02-cheese-pork-back-ribs-suon-heo-pho-mai.webp'
  },
  {
    name: '무뼈닭발',
    options: [
      { label: '마늘무뼈닭발', price: '259,000đ' },
      { label: '유자무뼈닭발', price: '259,000đ' },
      { label: '매운무뼈닭발', price: '259,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361081/menu-item-03-spicy-boneless-chicken-feet-chan-ga-rut-xuong.webp'
  }
];

// 리뷰 데이터
const reviewData = [
  {
    name: 'KE***',
    rating: 5,
    text: '"가게 위치가 아주 편리해서 찾기 쉽고 주차도 편했습니다. 매장 안은 깔끔하고 청결하며, 직원분들도 정말 친절했어요. 음식도 정말 맛있어서 꼭 드셔보시길 추천드리고 싶어요. 특히 소갈비와 뼈를 발라낸 닭발은 꼭 드셔보세요. 이건...',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361090/review-01-signature-beef-galbijjim-suon-bo-ham.webp'
  },
  {
    name: 'Ja***',
    rating: 5,
    text: '"한국을 생각나게 하는 갈비찜! 식전에 순두부를 먼저 주는데 매운 음식 섭취전, 마치 양식에 스프처럼 위를 달래주고 시작하는데 그 아이디어와 센스를 정말 칭찬해주고 싶으며, 순두부 맛 또한 깊장히 고소하다...',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361092/review-02-fried-rice-bokkeumbap-com-chien-han-quoc.webp'
  },
  {
    name: 'R***',
    rating: 5,
    text: '"소갈비 입에 넣는 순간 입에서 사라짐...고기가 녹아요.. 진짜 하나도 안 질김. 맵기도 선택가능. 식전에 순두부를 주시는데 그 맛이 진짜 한국맛...매운 속을 달래줍니다. 사장님께서 매일 아침 만드신다고 하셨는데 정성이 느껴...',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361093/review-03-spicy-pork-cartilage-sun-heo-xao-cay.webp'
  }
];

// 방송 데이터
const broadcastData = [
  { title: '슬기로운 감빵생활', subtitle: '유대감 매운갈비찜', channel: 'tvN', year: '2017', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361048/media-03-netflix-k-drama-prison-playbook-featured.webp' },
  { title: '식신로드', subtitle: '빅사이즈 특집', channel: 'Y-STAR', year: '2014', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361046/media-01-siksin-road-gourmet-variety-show.webp' },
  { title: '찾아라 맛있는 TV', subtitle: '갈비특집 우승', channel: 'MBC', year: '2015', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361046/media-02-mbc-find-delicious-tv-best-korean-restaurant.webp' },
  { title: '살림하는 남자들2', subtitle: '민우혁 이세미 부부편', channel: 'KBS2', year: '2017', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361050/media-04-kbs-mr-house-husband-season2.webp' },
  { title: '생방송 오늘 저녁', subtitle: '대왕갈비찜', channel: 'MBC', year: '2016', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361051/media-05-mbc-live-today-evening-news.webp' },
];

const broadcastListData = [
  { title: '생생정보통', subtitle: '매운갈비찜특집', channel: 'KBS2', year: '2014' },
  { title: '슈퍼주니어M 게스트하우스', subtitle: '스타맛집', channel: 'SBS', year: '2014' },
  { title: '언니들의 선택', subtitle: '매운맛 열전', channel: 'MBN', year: '2015' },
];

export default function Home() {
  const [menuTab, setMenuTab] = useState('set');
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  // 예약 모달 열기
  const openReserveModal = (e) => {
    e.preventDefault();
    setReserveModalOpen(true);
  };

  // 예약 모달 닫기
  const closeReserveModal = () => {
    setReserveModalOpen(false);
  };

  // Grab 주소 복사 함수
  const copyGrabAddress = async () => {
    const address = '1B7 Đường Số 29, Khu Phố 5, Thủ Đức, Thành phố Hồ Chí Minh 71106';
    try {
      await navigator.clipboard.writeText(address);
      alert('주소가 클립보드에 복사되었습니다!');
    } catch (err) {
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
  {/* 기본 메타 태그 */}
  <title>THE ZZIM 더찜 | 강남 3대 매운갈비찜의 전설, 호치민에서 만나다</title>
  <meta name="description" content="tvN 슬기로운 감빵생활, Y-STAR 식신로드 출연! 2013년 서울 강남에서 시작한 대왕갈비찜 전문점. 호치민 2군 안푸 Estella Place 2분 거리. 프리미엄 소갈비찜, 치즈등갈비, 무뼈닭발." />
  <meta name="keywords" content="더찜, THE ZZIM, 강남 3대 갈비찜, 대왕갈비찜, 매운갈비찜, 슬기로운 감빵생활, 식신로드, 호치민 한식당, 호치민 갈비찜, 호치민 2군 맛집, 안푸 한식당, Korean restaurant Ho Chi Minh, nhà hàng Hàn Quốc Quận 2, sườn bò hầm cay, Estella Place" />
  
  {/* Open Graph (Facebook, Kakao, Zalo) */}
  <meta property="og:type" content="restaurant" />
  <meta property="og:title" content="THE ZZIM 더찜 | 강남 3대 매운갈비찜의 전설" />
  <meta property="og:description" content="슬기로운 감빵생활, 식신로드 출연! 서울 강남에서 시작한 대왕갈비찜, 호치민 2군 안푸에서 경험하세요." />
  <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp" />
  <meta property="og:url" content="https://thezzimvn.com/" />
  <meta property="og:site_name" content="THE ZZIM 더찜" />
  <meta property="og:locale" content="ko_KR" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="THE ZZIM 더찜 | 강남 3대 매운갈비찜의 전설" />
  <meta name="twitter:description" content="슬기로운 감빵생활, 식신로드 출연! 대왕갈비찜 전문점, 호치민 2군 안푸." />
  <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp" />
  
  {/* 추가 SEO */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content="THE ZZIM" />
  <link rel="canonical" href="https://thezzimvn.com/" />
  <link rel="icon" href="/favicon.ico" />
</Head>


      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_70,w_800/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp"
           alt="THE ZZIM 대표 매운 갈비찜"
          className="hero-background"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">프리미엄 갈비찜</p>
          <h1 className="hero-title">THE ZZIM</h1>
          <p className="hero-description">
            <span className="hero-description-bold">강남 3대 갈비찜의 전설,</span>{' '}
            <span className="hero-description-normal">호치민 2군 안푸에서 경험하세요.</span>
          </p>
          <a href="#" className="hero-cta" onClick={openReserveModal}>지금 예약하기</a>
        </div>
      </section>

      {/* 예약 모달 */}
      {reserveModalOpen && (
        <>
          <div className="reserve-modal-overlay" onClick={closeReserveModal}></div>
          <div className="reserve-modal">
            <h2 className="reserve-modal-title">예약 채널 선택</h2>
            <p className="reserve-modal-description">원하시는 예약 방법을 선택해주세요.</p>
            
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
                <span>Zalo로 예약하기</span>
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
                <span>전화로 예약하기</span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* 대표메뉴 섹션 */}
      <section className="menu-section">
        <div className="section-container">
          <p className="section-subtitle">시그니처</p>
          <h2 className="section-title">THE ZZIM 대표메뉴</h2>
          
          {/* 메뉴 탭 */}
          <div className="menu-tabs">
            <div className="menu-tabs-wrapper">
              <button 
                className={`menu-tab ${menuTab === 'set' ? 'active' : ''}`}
                onClick={() => setMenuTab('set')}
              >
                세트메뉴
              </button>
              <button 
                className={`menu-tab ${menuTab === 'single' ? 'active' : ''}`}
                onClick={() => setMenuTab('single')}
              >
                단품메뉴
              </button>
            </div>
          </div>

          {/* 메뉴 그리드 */}
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
                      <Link href="/menu#menu-tabs" className="menu-more-btn">메뉴 더보기</Link>
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
                      <Link href="/menu?tab=single#menu-tabs" className="menu-more-btn">메뉴 더보기</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <p className="vat-notice">※모든 서비스 요금에는 베트남 현행 세법 규정에 따른 부가가치세(VAT)가 별도로 부과됩니다.</p>
        </div>
      </section>

      {/* 고객 리뷰 섹션 */}
      <section className="review-section">
        <div className="section-container">
          <p className="section-subtitle">리뷰</p>
          <h2 className="section-title">고객 리뷰</h2>
          <p className="review-rating">Google 4.7점 (524개 리뷰)</p>

          <div className="review-grid">
            {reviewData.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-image">
                  <img src={review.image} alt="리뷰 이미지" loading="lazy" />
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
            Google에서 더 많은 리뷰 보기 →
          </a>
        </div>
      </section>

      {/* 방송소개 섹션 */}
      <section className="broadcast-section">
        <div className="section-container">
          <p className="section-subtitle">언론이 선택한 THE ZZIM</p>
          <h2 className="section-title">The Zzim 방송소개</h2>

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
            
            {/* 방송 목록 카드 */}
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

      {/* 위치 섹션 */}
      <section className="location-section">
        <div className="section-container">
          <p className="section-subtitle">위치</p>
          <h2 className="section-title">호치민 2군 안푸<br />에스텔라 몰(Estella Place)에서 2분 거리</h2>

          <div className="location-content">
            <div className="location-map">
            <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.151669913686!2d106.74431137583852!3d10.79969335876248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527615354ebb9%3A0x89c8e142ec7e79ac!2zVEhFIFpaSU0gLSBOaMOgIGjDoG5nIEjDoG4gUXXhu5FjIChTxrDhu51uIELDsiBI4bqnbSk!5e0!3m2!1sko!2s!4v1767993052469!5m2!1sko!2s"
  width="100%" 
  height="400" 
  style={{border: 0, borderRadius: '12px'}} 
  allowFullScreen="" 
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="THE ZZIM 매장 위치 지도"
></iframe>

<button className="map-btn" onClick={openGoogleMaps} aria-label="구글 지도로 열기">
  구글 지도로 열기
</button>
            </div>

            <div className="location-info">
              <h3>The Zzim 매운 갈비찜 전문점</h3>
              <p className="location-address">1B7 Đường Số 29, Khu Phố 5, Thủ Đức, Thành phố Hồ Chí Minh 71106</p>
              
              <button className="grab-btn" onClick={copyGrabAddress} aria-label="Grab 주소 복사">
  Grab 주소 복사
</button>

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

              <button className="map-link-btn" onClick={openGoogleMaps} aria-label="구글 지도로 열기">
  구글 지도로 열기
</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
