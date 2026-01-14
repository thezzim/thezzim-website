// pages/menu.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// 세트 메뉴 데이터
const setMenuData = [
  {
    name: 'Special Combo',
    price: '2,499,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539478/menu-special-combo-set-galbijjim-sides-combo-dac-biet.webp',
    items: ['소갈비찜 두판', '치즈등갈비(대)', '마늘오돌뼈', '우삼겹된장탕', '진미채김밥', '연어샐러드']
  },
  {
    name: 'Best Combo',
    price: '1,599,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-combo-02-best-seller-family-dining-set-recommend.webp',
    items: ['소갈비찜 한판', '치즈등갈비(중)', '유자무뼈닭발', '우삼겹된장탕', '해산물샐러드']
  },
  {
    name: 'The Zzim Combo 1',
    price: '1,199,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-the-zzim-combo-1-signature-set-combo-dac-trung.webp',
    items: ['소갈비찜 반판', '치즈등갈비(소)', '마늘무뼈닭발', '김치찌개', '오리가슴살 샐러드']
  },
  {
    name: 'The Zzim Combo 2',
    price: '999,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539477/menu-the-zzim-combo-2-signature-set-combo-dac-trung.webp',
    items: ['소갈비찜 반판', '치즈등갈비(소)', '김치찌개', '오리가슴살 샐러드']
  },
  {
    name: 'Couple Combo 1',
    price: '799,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-couple-combo-set-for-two-date-night-combo-1-nguoi.webp',
    items: ['소갈비찜 반판', '돌솥비빔밥', '김치찌개', '오리가슴살샐러드']
  },
  {
    name: 'Couple Combo 2',
    price: '699,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-combo-03-couple-set-date-dining-for-two.webp',
    items: ['치즈등갈비(소)', '돌솥비빔밥', '김치찌개', '오리가슴살샐러드']
  }
];

// 단품 메뉴 데이터 - 메인
const singleMenuMain = [
  {
    name: '대왕소등갈비찜',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp',
    options: [
      { label: '반판 (뼈3대)', price: '499,000đ' },
      { label: '한판 (뼈5대)', price: '699,000đ' },
      { label: '두판 (뼈9대)', price: '1,199,000đ' }
    ]
  },
  {
    name: '치즈돼지등갈비',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361080/menu-item-02-cheese-pork-back-ribs-suon-heo-pho-mai.webp',
    options: [
      { label: '소 (뼈4대, 치즈 150g)', price: '399,000đ' },
      { label: '중 (뼈8대, 치즈 200g)', price: '599,000đ' },
      { label: '대 (뼈12대, 치즈 300g)', price: '899,000đ' }
    ]
  },
  {
    name: '무뼈닭발',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361081/menu-item-03-spicy-boneless-chicken-feet-chan-ga-rut-xuong.webp',
    options: [
      { label: '마늘무뼈닭발', price: '199,000đ' },
      { label: '유자무뼈닭발', price: '199,000đ' },
      { label: '매운무뼈닭발', price: '199,000đ' }
    ]
  },
  {
    name: '오돌뼈',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361084/menu-odolbbyeo-spicy-stir-fried-pork-cartilage-sun-heo-xao-cay.webp',
    options: [
      { label: '마늘오돌뼈', price: '199,000đ' },
      { label: '유자오돌뼈', price: '199,000đ' },
      { label: '매운오돌뼈', price: '199,000đ' }
    ]
  }
];

// 단품 메뉴 데이터 - 탕/식사/사이드
const singleMenuSub = [
  {
    name: '탕 메뉴',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361077/menu-galbitang-beef-short-rib-soup-canh-suon-bo.webp',
    options: [
      { label: '대왕갈비탕', price: '269,000đ' },
      { label: '해물게란탕', price: '189,000đ' },
      { label: '북어국', price: '129,000đ' },
      { label: '우삼겹미역국', price: '129,000đ' },
      { label: '김치찌게', price: '129,000đ' }
    ],
    note: '*탕메뉴 공기밥 미제공'
  },
  {
    name: '식사메뉴',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361083/menu-jumeokbap-diy-seaweed-rice-balls-com-nam-rong-bien.webp',
    options: [
      { label: '돌솥비빔밥', price: '149,000đ' },
      { label: '갈비김밥', price: '109,000đ' },
      { label: '진미채김밥', price: '109,000đ' },
      { label: '갈비주먹밥', price: '69,000đ' },
      { label: '주먹밥', price: '49,000đ' }
    ]
  },
  {
    name: '사이드메뉴',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361072/menu-corn-cheese-sizzling-sweet-corn-bap-xao-pho-mai.webp',
    options: [
      { label: '연어샐러드', price: '129,000đ' },
      { label: '해산물샐러드', price: '129,000đ' },
      { label: '오리가슴살샐러드', price: '109,000đ' },
      { label: '모짜렐라콘치즈', price: '139,000đ' }
    ]
  }
];

// 매운맛 레벨 데이터
const spicyLevels = [
  { level: '0', label: '간장맛', sublabel: '(맵지않음)', image: null, highlight: false },
  { level: '0.25', label: null, sublabel: null, image: null, highlight: false },
  { level: '0.5', label: null, sublabel: null, image: null, highlight: false },
  { level: '1', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766669223/nongshim-shin-ramyun-spicy.webp', highlight: true },
  { level: '2', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766669223/samyang-buldak-bokkeum-myeon-spicy.webp', highlight: true },
  { level: '3', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766670683/samyang-buldak-bokkeum-myeon-3x-spicy-removebg-preview.webp', highlight: true },
  { level: '4', label: null, sublabel: null, image: null, highlight: false },
  { level: '5', label: '반드시', sublabel: '문의하세요!', image: null, highlight: true, warning: true }
];

export default function Menu() {
  const router = useRouter();
  const [menuTab, setMenuTab] = useState('set');

  useEffect(() => {
    if (router.isReady) {
      const tab = router.query.tab;
      if (tab === 'single') {
        setMenuTab('single');
      }
    }
  }, [router.isReady, router.query.tab]);

  return (
    <>
      <Head>
        <title>메뉴 | THE ZZIM 대왕소갈비찜, 대왕갈비탕, 치즈등갈비</title>
        <meta name="description" content="THE ZZIM 시그니처 메뉴. 대왕소갈비찜(반판/한판/두판), 대왕갈비탕, 치즈돼지등갈비, 무뼈닭발, 오돌뼈. 5단계 매운맛 선택. 세트메뉴 699,000đ부터. 슬기로운 감빵생활, 식신로드 출연 맛집." />
        <meta name="keywords" content="더찜 메뉴, 대왕갈비찜, 대왕갈비탕, 소갈비찜, 치즈등갈비, 무뼈닭발, 오돌뼈, 매운갈비찜 메뉴, 슬기로운 감빵생활 갈비찜, 식신로드 맛집, 호치민 한식 메뉴, THE ZZIM menu, sườn bò hầm cay, menu nhà hàng Hàn Quốc" />
        <meta property="og:type" content="restaurant.menu" />
        <meta property="og:title" content="메뉴 | THE ZZIM 대왕소갈비찜, 대왕갈비탕" />
        <meta property="og:description" content="대왕소갈비찜, 대왕갈비탕, 치즈등갈비, 무뼈닭발. 5단계 매운맛 선택. 슬기로운 감빵생활, 식신로드 출연 맛집." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp" />
        <meta property="og:url" content="https://thezzimvn.com/menu" />
        <meta property="og:site_name" content="THE ZZIM 더찜" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="메뉴 | THE ZZIM 대왕소갈비찜, 대왕갈비탕" />
        <meta name="twitter:description" content="대왕소갈비찜, 대왕갈비탕, 치즈등갈비. 5단계 매운맛 선택." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/menu" />
      </Head>

      {/* 히어로 섹션 */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361061/menu-hero-signature-giant-beef-rib-soup-galbitang-suon-bo-khong-lo.webp" 
          alt="THE ZZIM 시그니처 메뉴"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">프리미엄 갈비찜</p>
          <h1 className="hero-title">MENU</h1>
          <p className="hero-description">정성을 담은 THE ZZIM의 시그니처 메뉴</p>
          <a href="tel:+84825251004" className="hero-cta">지금 예약하기</a>
        </div>
      </section>

      {/* 메뉴 섹션 */}
      <section className="menu-page-section">
        <div className="menu-page-container">
          
          {/* 메뉴 탭 */}
          <div className="menu-tabs" id="menu-tabs">
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

          {/* 세트 메뉴 */}
          {menuTab === 'set' && (
            <div className="set-menu-grid">
              {setMenuData.map((item, index) => (
                <div key={index} className="set-menu-card">
                  <div className="set-menu-image">
                    <img src={item.image} alt={item.name} />
                    <div className="set-menu-overlay">
                      <h3 className="set-menu-name">{item.name}</h3>
                      <p className="set-menu-price">{item.price}</p>
                    </div>
                  </div>
                  <div className="set-menu-items">
                    {item.items.map((menuItem, i) => (
                      <p key={i} className="set-menu-item">
                        <span className="menu-bullet">·</span> {menuItem}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 단품 메뉴 */}
          {menuTab === 'single' && (
            <div className="single-menu-section">
              {/* 메인 메뉴 */}
              <div className="single-menu-grid main-grid">
                {singleMenuMain.map((item, index) => (
                  <div key={index} className="single-menu-card">
                    <div className="single-menu-image">
                      <img src={item.image} alt={item.name} />
                      <h4 className="single-menu-name">{item.name}</h4>
                    </div>
                    <div className="single-menu-options">
                      {item.options.map((opt, i) => (
                        <div key={i} className="single-menu-option">
                          <span className="option-label">
                            <span className="menu-bullet">·</span> {opt.label}
                          </span>
                          <span className="option-price">{opt.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 탕/식사/사이드 메뉴 */}
              <div className="single-menu-grid sub-grid">
                {singleMenuSub.map((item, index) => (
                  <div key={index} className="single-menu-card">
                    <div className="single-menu-image">
                      <img src={item.image} alt={item.name} />
                      <h4 className="single-menu-name">{item.name}</h4>
                    </div>
                    <div className="single-menu-options">
                      {item.options.map((opt, i) => (
                        <div key={i} className="single-menu-option">
                          <span className="option-label">
                            <span className="menu-bullet">·</span> {opt.label}
                          </span>
                          <span className="option-price">{opt.price}</span>
                        </div>
                      ))}
                      {item.note && <p className="menu-note">{item.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 매운맛 레벨 섹션 */}
      <section className="spicy-level-section">
        <div className="spicy-level-container">
          <h2 className="spicy-level-title">THE ZZIM LEVEL</h2>
          <p className="spicy-level-subtitle">매운맛 강도를 선택하세요</p>

          <div className="spicy-caution">
            <span className="caution-icon">🔥</span>
            <p>
              <strong>주의(Caution):</strong> The Zzim의 특제 소스는 일반적인 <span className="highlight">매운맛보다 훨씬 강력합니다</span>. 
              캡사이신 없이 낸 깊고 진한 매운맛이니, <span className="highlight">본인의 식성에 맞춰 신중하게 선택해 주세요</span>.
            </p>
          </div>

          <div className="spicy-levels">
            {spicyLevels.map((item, index) => (
              <div 
                key={index} 
                className={`spicy-level-card ${item.highlight ? 'highlight' : ''} ${item.warning ? 'warning' : ''}`}
                data-level={item.level}
              >
                <span className="level-number">{item.level}</span>
                {item.image && (
                  <img src={item.image} alt={`레벨 ${item.level}`} className="level-image" />
                )}
                {item.label && <span className="level-label">{item.label}</span>}
                {item.sublabel && <span className="level-sublabel">{item.sublabel}</span>}
              </div>
            ))}
          </div>

          <p className="spicy-notice">
            * The Zzim의 모든 메뉴는 현지의 재료와 환경에 맞춰 '현지화된 레시피'로 조리됩니다. 모든 분들의 입맛을 100% 만족시켜 드리지 못해 송구하지만, 다양한 고객님들의 의견을 반영하여 더욱 발전하겠습니다.
          </p>
        </div>
      </section>
    </>
  );
}
