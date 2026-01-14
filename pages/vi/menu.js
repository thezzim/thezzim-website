// pages/vi/menu.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Set Menu Data
const setMenuData = [
  {
    name: 'Special Combo',
    price: '2,499,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539478/menu-special-combo-set-galbijjim-sides-combo-dac-biet.webp',
    items: ['Sườn bò hầm 2 phần', 'Sườn heo phô mai (lớn)', 'Sụn heo tỏi', 'Canh doenjang ba chỉ bò', 'Kimbap mực khô', 'Salad cá hồi']
  },
  {
    name: 'Best Combo',
    price: '1,599,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-combo-02-best-seller-family-dining-set-recommend.webp',
    items: ['Sườn bò hầm 1 phần', 'Sườn heo phô mai (vừa)', 'Chân gà rút xương yuzu', 'Canh doenjang ba chỉ bò', 'Salad hải sản']
  },
  {
    name: 'The Zzim Combo 1',
    price: '1,199,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-the-zzim-combo-1-signature-set-combo-dac-trung.webp',
    items: ['Sườn bò hầm nửa phần', 'Sườn heo phô mai (nhỏ)', 'Chân gà rút xương tỏi', 'Canh kim chi', 'Salad ức vịt']
  },
  {
    name: 'The Zzim Combo 2',
    price: '999,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539477/menu-the-zzim-combo-2-signature-set-combo-dac-trung.webp',
    items: ['Sườn bò hầm nửa phần', 'Sườn heo phô mai (nhỏ)', 'Canh kim chi', 'Salad ức vịt']
  },
  {
    name: 'Couple Combo 1',
    price: '799,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-couple-combo-set-for-two-date-night-combo-1-nguoi.webp',
    items: ['Sườn bò hầm nửa phần', 'Cơm trộn đá nóng', 'Canh kim chi', 'Salad ức vịt']
  },
  {
    name: 'Couple Combo 2',
    price: '699,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-combo-03-couple-set-date-dining-for-two.webp',
    items: ['Sườn heo phô mai (nhỏ)', 'Cơm trộn đá nóng', 'Canh kim chi', 'Salad ức vịt']
  }
];

// Single Menu - Main
const singleMenuMain = [
  {
    name: 'Sườn Bò Hầm Cay Khổng Lồ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp',
    options: [
      { label: 'Nửa phần (3 xương)', price: '499,000đ' },
      { label: 'Một phần (5 xương)', price: '699,000đ' },
      { label: 'Hai phần (9 xương)', price: '1,199,000đ' }
    ]
  },
  {
    name: 'Sườn Heo Phô Mai',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361080/menu-item-02-cheese-pork-back-ribs-suon-heo-pho-mai.webp',
    options: [
      { label: 'Nhỏ (4 xương, 150g phô mai)', price: '399,000đ' },
      { label: 'Vừa (8 xương, 200g phô mai)', price: '599,000đ' },
      { label: 'Lớn (12 xương, 300g phô mai)', price: '899,000đ' }
    ]
  },
  {
    name: 'Chân Gà Rút Xương',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361081/menu-item-03-spicy-boneless-chicken-feet-chan-ga-rut-xuong.webp',
    options: [
      { label: 'Chân gà tỏi', price: '199,000đ' },
      { label: 'Chân gà yuzu', price: '199,000đ' },
      { label: 'Chân gà cay', price: '199,000đ' }
    ]
  },
  {
    name: 'Sụn Heo Xào',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361084/menu-odolbbyeo-spicy-stir-fried-pork-cartilage-sun-heo-xao-cay.webp',
    options: [
      { label: 'Sụn heo tỏi', price: '199,000đ' },
      { label: 'Sụn heo yuzu', price: '199,000đ' },
      { label: 'Sụn heo cay', price: '199,000đ' }
    ]
  }
];

// Single Menu - Soup/Rice/Side
const singleMenuSub = [
  {
    name: 'Món Canh',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361077/menu-galbitang-beef-short-rib-soup-canh-suon-bo.webp',
    options: [
      { label: 'Canh sườn bò khổng lồ', price: '269,000đ' },
      { label: 'Canh hải sản trứng', price: '189,000đ' },
      { label: 'Canh cá khô', price: '129,000đ' },
      { label: 'Canh rong biển ba chỉ bò', price: '129,000đ' },
      { label: 'Canh kim chi', price: '129,000đ' }
    ],
    note: '*Món canh không kèm cơm'
  },
  {
    name: 'Món Cơm',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361083/menu-jumeokbap-diy-seaweed-rice-balls-com-nam-rong-bien.webp',
    options: [
      { label: 'Cơm trộn đá nóng', price: '149,000đ' },
      { label: 'Kimbap sườn', price: '109,000đ' },
      { label: 'Kimbap mực khô', price: '109,000đ' },
      { label: 'Cơm nắm sườn', price: '69,000đ' },
      { label: 'Cơm nắm', price: '49,000đ' }
    ]
  },
  {
    name: 'Món Phụ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361072/menu-corn-cheese-sizzling-sweet-corn-bap-xao-pho-mai.webp',
    options: [
      { label: 'Salad cá hồi', price: '129,000đ' },
      { label: 'Salad hải sản', price: '129,000đ' },
      { label: 'Salad ức vịt', price: '109,000đ' },
      { label: 'Bắp phô mai', price: '139,000đ' }
    ]
  }
];

// Spicy Level Data
const spicyLevels = [
  { level: '0', label: 'Vị xì dầu', sublabel: '(Không cay)', image: null, highlight: false },
  { level: '0.25', label: null, sublabel: null, image: null, highlight: false },
  { level: '0.5', label: null, sublabel: null, image: null, highlight: false },
  { level: '1', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766669223/nongshim-shin-ramyun-spicy.webp', highlight: true },
  { level: '2', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766669223/samyang-buldak-bokkeum-myeon-spicy.webp', highlight: true },
  { level: '3', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766670683/samyang-buldak-bokkeum-myeon-3x-spicy-removebg-preview.webp', highlight: true },
  { level: '4', label: null, sublabel: null, image: null, highlight: false },
  { level: '5', label: 'Vui lòng', sublabel: 'liên hệ!', image: null, highlight: true, warning: true }
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
        <title>Thực Đơn | THE ZZIM Sườn Bò Hầm Cay, Canh Sườn Bò, Sườn Heo Phô Mai</title>
        <meta name="description" content="Thực đơn đặc trưng THE ZZIM. Sườn bò hầm cay khổng lồ (nửa/một/hai phần), canh sườn bò, sườn heo phô mai, chân gà rút xương, sụn heo. 5 cấp độ cay. Set menu từ 699,000đ. Xuất hiện trên Prison Playbook, Siksin Road." />
        <meta name="keywords" content="THE ZZIM menu, sườn bò hầm cay, canh sườn bò, sườn heo phô mai, chân gà rút xương, sụn heo, menu nhà hàng Hàn Quốc, thực đơn Hàn Quốc Quận 2" />
        <meta property="og:type" content="restaurant.menu" />
        <meta property="og:title" content="Thực Đơn | THE ZZIM Sườn Bò Hầm Cay, Canh Sườn Bò" />
        <meta property="og:description" content="Sườn bò hầm cay, canh sườn bò, sườn heo phô mai, chân gà rút xương. 5 cấp độ cay. Xuất hiện trên Prison Playbook, Siksin Road." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp" />
        <meta property="og:url" content="https://thezzimvn.com/vi/menu" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="vi_VN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thực Đơn | THE ZZIM Sườn Bò Hầm Cay" />
        <meta name="twitter:description" content="Sườn bò hầm cay, canh sườn bò, sườn heo phô mai. 5 cấp độ cay." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/vi/menu" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361061/menu-hero-signature-giant-beef-rib-soup-galbitang-suon-bo-khong-lo.webp" 
          alt="Thực đơn đặc trưng THE ZZIM"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Sườn Bò Hầm Cao Cấp</p>
          <h1 className="hero-title">MENU</h1>
          <p className="hero-description">Thực đơn đặc trưng THE ZZIM với tâm huyết</p>
          <a href="tel:+84825251004" className="hero-cta">Đặt bàn ngay</a>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-page-section">
        <div className="menu-page-container">
          
          {/* Menu Tabs */}
          <div className="menu-tabs" id="menu-tabs">
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
                Món Lẻ
              </button>
            </div>
          </div>

          {/* Set Menu */}
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

          {/* Single Menu */}
          {menuTab === 'single' && (
            <div className="single-menu-section">
              {/* Main Menu */}
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

              {/* Soup/Rice/Side Menu */}
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

      {/* Spicy Level Section */}
      <section className="spicy-level-section">
        <div className="spicy-level-container">
          <h2 className="spicy-level-title">THE ZZIM LEVEL</h2>
          <p className="spicy-level-subtitle">Chọn độ cay của bạn</p>

          <div className="spicy-caution">
            <span className="caution-icon">🔥</span>
            <p>
              <strong>Lưu ý:</strong> Sốt đặc biệt của The Zzim <span className="highlight">cay hơn nhiều so với bình thường</span>. 
              Vị cay sâu đậm không dùng capsaicin, <span className="highlight">vui lòng chọn cẩn thận theo khẩu vị của bạn</span>.
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
                  <img src={item.image} alt={`Level ${item.level}`} className="level-image" />
                )}
                {item.label && <span className="level-label">{item.label}</span>}
                {item.sublabel && <span className="level-sublabel">{item.sublabel}</span>}
              </div>
            ))}
          </div>

          <p className="spicy-notice">
            * Tất cả món ăn của The Zzim được nấu theo 'công thức địa phương hóa' phù hợp với nguyên liệu và môi trường địa phương. Chúng tôi xin lỗi vì không thể làm hài lòng 100% khẩu vị của tất cả mọi người, nhưng sẽ tiếp tục cải thiện dựa trên ý kiến của quý khách.
          </p>
        </div>
      </section>
    </>
  );
}
