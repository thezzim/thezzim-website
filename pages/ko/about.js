// pages/about.js
import Head from 'next/head';

// 연혁 데이터
const journeyData = [
  {
    year: '2013',
    title: '서울서 강남구 논현동',
    description: '시작은 강남콩 매운갈비찜 이었습니다',
    position: 'left'
  },
  {
    year: '2014',
    title: '식신로드, 생생정보통\n슈퍼주니어M 게스트하우스',
    description: 'Y-STAR의 식신로드, KBS2 생생정보통, SBS 슈퍼주니어M의 게스트하우스 등 주요 방송에 소개되며 알려지기 시작했습니다!',
    position: 'right'
  },
  {
    year: '2015',
    title: '찾아라 맛있는 TV\n언니들의 선택',
    description: 'MBC 찾아라 맛있는 TV에서 \'갈비특집 우승\', MBN 언니들의 선택 \'매운맛 열전\'에서 매운맛으로 선정되었습니다!',
    position: 'left'
  },
  {
    year: '2016',
    title: '생방송 오늘 저녁',
    description: '수많은 연예인 지망생 MBC 생방송 오늘 저녁에 소개되며 더욱 많은 사람들에게 알려졌습니다!',
    position: 'right'
  },
  {
    year: '2017',
    title: '슬기로운 감빵생활\n살림하는 남자들2',
    description: 'tvN 드라마 \'슬기로운 감빵생활\'의 유대감 매운갈비찜, KBS2 \'살림하는 남자들 2\'의 이세미-민우혁가 소개하며 강동호 브랜드의 전설 역사가 끝나다',
    position: 'left'
  },
  {
    year: '2020',
    title: '호치민 2군 안푸(본점 이전)',
    description: '한국의 매장을 정리하고 호치민 2군 안푸에 The Zzim(더찜)본점을 이전 오픈했습니다!',
    position: 'right'
  }
];

// 철학 데이터
const philosophyData = [
  {
    icon: '🇰🇷',
    title: '2013년부터 이어온 원칙',
    description: '서울 강남 줄 서는 맛집 \'강남콩\'의 노하우 그대로. 시간이 흘러도 변하지 않는 오리지널 레시피를 지킵니다.'
  },
  {
    icon: '🌶️',
    title: '자연이 만든 매운맛',
    description: '인위적인 캡사이신은 절대 쓰지 않습니다. 오직 최상급 과일/야채들과 고춧가루로 숙성시킨 속 편한 맛을 고집합니다.'
  },
  {
    icon: '⭐',
    title: '기다림의 미학',
    description: '빠른 음식은 만들지 않습니다. 주문 즉시 조리하여, 시간이 걸리더라도 재료 본연의 깊은 풍미와 정성을 그릇에 담아냅니다.'
  }
];

export default function About() {
  return (
    <>
     <Head>
  {/* 기본 메타 태그 */}
  <title>브랜드 스토리 | THE ZZIM 2013년 강남에서 시작된 전설</title>
  <meta name="description" content="2013년 서울 강남 논현동에서 '강남콩'으로 시작. tvN 슬기로운 감빵생활, Y-STAR 식신로드, MBC 찾아라 맛있는TV 출연. 캡사이신 없는 자연 매운맛의 철학. 2020년 호치민 안푸로 확장." />
  <meta name="keywords" content="더찜 역사, 강남콩, 강남 3대 갈비찜, 슬기로운 감빵생활 갈비찜, 식신로드 갈비찜, 찾아라 맛있는TV, 생생정보통, 살림하는 남자들, THE ZZIM story, 호치민 한식당 역사, 대왕갈비찜" />
  
  {/* Open Graph (Facebook, Kakao, Zalo) */}
  <meta property="og:type" content="article" />
  <meta property="og:title" content="브랜드 스토리 | THE ZZIM 강남에서 시작된 전설" />
  <meta property="og:description" content="2013년 강남 논현동에서 시작. 슬기로운 감빵생활, 식신로드 출연. 13년 전통의 매운갈비찜." />
  <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" />
  <meta property="og:url" content="https://thezzimvn.com/ko/about" />
  <meta property="og:site_name" content="THE ZZIM 더찜" />
  <meta property="og:locale" content="ko_KR" />
  
  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="브랜드 스토리 | THE ZZIM 강남에서 시작된 전설" />
  <meta name="twitter:description" content="2013년 강남에서 시작. 슬기로운 감빵생활, 식신로드 출연. 13년 전통." />
  <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" />
  
  {/* 추가 SEO */}
  <meta name="robots" content="index, follow" />
  <meta name="author" content="THE ZZIM" />
  <link rel="canonical" href="https://thezzimvn.com/ko/about" />
</Head>


      {/* Hero Section */}
<section className="hero">
  <img 
    src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" 
    alt="THE ZZIM 브랜드 스토리"
    className="hero-background"
  />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <p className="hero-subtitle">SINCE 2013</p>
    <h1 className="hero-title">THE ZZIM</h1>
    <p className="hero-description">강남, 전설의 매운맛.</p>
  </div>
</section>

      {/* 브랜드 스토리 섹션 */}
      <section className="brand-story-section">
        <div className="section-container">
          
          {/* 스토리 1 */}
          <div className="story-block">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361042/brand-story-01-origin-since-2013-seoul-gangnamkong-legend.webp" alt="강남콩 매장" />
            </div>
            <div className="story-content">
              <p className="story-label">2013 · 서울 강남</p>
              <h2 className="story-title">2013, 서울의 전설 '강남콩'이<br />시작이었습니다</h2>
              <p className="story-text">
                2013년, 서울에서 '강남콩'이라는 이름으로 처음 문을 열었습니다. 
                화려한 마케팅 없이 오직 <span className="highlight">'중독성 있는 매운맛'</span> 하나로 입소문이 
                났고, 많은 분들이 줄 서서 찾아주시는 서울의 명점이 되었습니다. 
                유행 따라 생겼다 사라지는 식당이 아닙니다. 13년이라는 시간 
                (Time)이 우리의 맛을 증명합니다.
              </p>
            </div>
          </div>

          {/* 스토리 2 */}
          <div className="story-block reverse">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361042/brand-story-02-philosophy-authentic-spicy-galbijjim-no-capsaicin.webp" alt="매운 갈비찜" />
            </div>
            <div className="story-content">
              <p className="story-label">철학</p>
              <h2 className="story-title">인위적인 매운맛은 거부합니다</h2>
              <p className="story-text">
                쉽게 맵게 하려고 캡사이신을 쓰지 않습니다. <span className="highlight">최고급 고춧가루와 
                과일로 숙성시킨 자연스러운 매운맛</span>만이 속을 편안하게 하고, 
                젓가락을 놓지 못하게 만든다고 믿습니다. <span className="highlight">'가장 한국적인 매운맛'</span>- 
                타국 베트남이라고 해서 재료와 타협하지 않는 The Zzim만의 
                고집입니다.
              </p>
            </div>
          </div>

          {/* 스토리 3 */}
          <div className="story-block">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361043/brand-story-03-location-ho-chi-minh-district-2-an-phu-interior.webp" alt="THE ZZIM 호치민 매장" />
            </div>
            <div className="story-content">
              <p className="story-label">현재 · 호치민 2군 안푸</p>
              <h2 className="story-title">호치민 2군 안푸, 여유를 담은<br />공간으로</h2>
              <p className="story-text">
                복잡한 도심을 벗어나, 호치민 2군 안푸(An Phu)의 한적한 골목 
                안에 자리를 잡았습니다. 상호는 <span className="highlight">The Zzim(더찜)</span>으로 
                바뀌었지만, 주방을 지키는 사람도, 맛에 대한 정성도 
                그대로입니다. 주차 걱정 없는 편안한 공간에서, 서울의 그 맛 
                그대로를 대접하겠습니다.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 연혁 섹션 */}
      <section className="journey-section">
        <div className="section-container">
          <h2 className="journey-main-title">OUR JOURNEY</h2>
          <p className="journey-main-subtitle">서울 강남에서 호치민 안푸까지, 13년의 여정</p>

          <div className="timeline">
            <div className="timeline-line"></div>
            
            {journeyData.map((item, index) => (
              <div key={index} className={`timeline-item ${item.position}`}>
                <div className="timeline-card">
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 철학 섹션 */}
      <section className="philosophy-section">
        <div className="section-container">
          <div className="philosophy-grid">
            {philosophyData.map((item, index) => (
              <div key={index} className="philosophy-card">
                <div className="philosophy-icon">{item.icon}</div>
                <h3 className="philosophy-title">{item.title}</h3>
                <p className="philosophy-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
