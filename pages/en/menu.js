// pages/en/menu.js
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// Set Menu Data
const setMenuData = [
  {
    name: 'Special Combo',
    price: '2,499,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539478/menu-special-combo-set-galbijjim-sides-combo-dac-biet.webp',
    items: ['Beef Rib Stew Double', 'Cheese Pork Ribs (L)', 'Garlic Pork Cartilage', 'Beef Doenjang Soup', 'Dried Squid Kimbap', 'Salmon Salad']
  },
  {
    name: 'Best Combo',
    price: '1,599,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-combo-02-best-seller-family-dining-set-recommend.webp',
    items: ['Beef Rib Stew Full', 'Cheese Pork Ribs (M)', 'Yuzu Boneless Chicken Feet', 'Beef Doenjang Soup', 'Seafood Salad']
  },
  {
    name: 'The Zzim Combo 1',
    price: '1,199,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-the-zzim-combo-1-signature-set-combo-dac-trung.webp',
    items: ['Beef Rib Stew Half', 'Cheese Pork Ribs (S)', 'Garlic Boneless Chicken Feet', 'Kimchi Stew', 'Duck Breast Salad']
  },
  {
    name: 'The Zzim Combo 2',
    price: '999,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539477/menu-the-zzim-combo-2-signature-set-combo-dac-trung.webp',
    items: ['Beef Rib Stew Half', 'Cheese Pork Ribs (S)', 'Kimchi Stew', 'Duck Breast Salad']
  },
  {
    name: 'Couple Combo 1',
    price: '799,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-couple-combo-set-for-two-date-night-combo-1-nguoi.webp',
    items: ['Beef Rib Stew Half', 'Stone Pot Bibimbap', 'Kimchi Stew', 'Duck Breast Salad']
  },
  {
    name: 'Couple Combo 2',
    price: '699,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766539476/menu-combo-03-couple-set-date-dining-for-two.webp',
    items: ['Cheese Pork Ribs (S)', 'Stone Pot Bibimbap', 'Kimchi Stew', 'Duck Breast Salad']
  }
];

// Single Menu - Main
const singleMenuMain = [
  {
    name: 'Giant Spicy Beef Rib Stew',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp',
    options: [
      { label: 'Half (3 ribs)', price: '499,000đ' },
      { label: 'Full (5 ribs)', price: '699,000đ' },
      { label: 'Double (9 ribs)', price: '1,199,000đ' }
    ]
  },
  {
    name: 'Cheese Pork Back Ribs',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361080/menu-item-02-cheese-pork-back-ribs-suon-heo-pho-mai.webp',
    options: [
      { label: 'Small (4 ribs, 150g cheese)', price: '399,000đ' },
      { label: 'Medium (8 ribs, 200g cheese)', price: '599,000đ' },
      { label: 'Large (12 ribs, 300g cheese)', price: '899,000đ' }
    ]
  },
  {
    name: 'Boneless Chicken Feet',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361081/menu-item-03-spicy-boneless-chicken-feet-chan-ga-rut-xuong.webp',
    options: [
      { label: 'Garlic', price: '199,000đ' },
      { label: 'Yuzu', price: '199,000đ' },
      { label: 'Spicy', price: '199,000đ' }
    ]
  },
  {
    name: 'Stir-fried Pork Cartilage',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361084/menu-odolbbyeo-spicy-stir-fried-pork-cartilage-sun-heo-xao-cay.webp',
    options: [
      { label: 'Garlic', price: '199,000đ' },
      { label: 'Yuzu', price: '199,000đ' },
      { label: 'Spicy', price: '199,000đ' }
    ]
  }
];

// Single Menu - Soup/Rice/Side
const singleMenuSub = [
  {
    name: 'Soup Menu',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361077/menu-galbitang-beef-short-rib-soup-canh-suon-bo.webp',
    options: [
      { label: 'Giant Beef Rib Soup', price: '269,000đ' },
      { label: 'Seafood Egg Soup', price: '189,000đ' },
      { label: 'Dried Pollack Soup', price: '129,000đ' },
      { label: 'Beef Seaweed Soup', price: '129,000đ' },
      { label: 'Kimchi Stew', price: '129,000đ' }
    ],
    note: '*Soup does not include rice'
  },
  {
    name: 'Rice Menu',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361083/menu-jumeokbap-diy-seaweed-rice-balls-com-nam-rong-bien.webp',
    options: [
      { label: 'Stone Pot Bibimbap', price: '149,000đ' },
      { label: 'Rib Kimbap', price: '109,000đ' },
      { label: 'Dried Squid Kimbap', price: '109,000đ' },
      { label: 'Rib Rice Ball', price: '69,000đ' },
      { label: 'Rice Ball', price: '49,000đ' }
    ]
  },
  {
    name: 'Side Menu',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361072/menu-corn-cheese-sizzling-sweet-corn-bap-xao-pho-mai.webp',
    options: [
      { label: 'Salmon Salad', price: '129,000đ' },
      { label: 'Seafood Salad', price: '129,000đ' },
      { label: 'Duck Breast Salad', price: '109,000đ' },
      { label: 'Mozzarella Corn Cheese', price: '139,000đ' }
    ]
  }
];

// Spicy Level Data
const spicyLevels = [
  { level: '0', label: 'Soy Sauce', sublabel: '(Not Spicy)', image: null, highlight: false },
  { level: '0.25', label: null, sublabel: null, image: null, highlight: false },
  { level: '0.5', label: null, sublabel: null, image: null, highlight: false },
  { level: '1', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766669223/nongshim-shin-ramyun-spicy.webp', highlight: true },
  { level: '2', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766669223/samyang-buldak-bokkeum-myeon-spicy.webp', highlight: true },
  { level: '3', label: null, sublabel: null, image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766670683/samyang-buldak-bokkeum-myeon-3x-spicy-removebg-preview.webp', highlight: true },
  { level: '4', label: null, sublabel: null, image: null, highlight: false },
  { level: '5', label: 'Please', sublabel: 'ask us!', image: null, highlight: true, warning: true }
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
        <title>Menu | THE ZZIM Giant Spicy Beef Ribs, Beef Rib Soup, Cheese Pork Ribs</title>
        <meta name="description" content="THE ZZIM signature menu. Giant spicy beef rib stew (half/full/double), beef rib soup, cheese pork ribs, boneless chicken feet, pork cartilage. 5 spice levels. Set menu from 699,000đ. Featured on Prison Playbook, Siksin Road." />
        <meta name="keywords" content="THE ZZIM menu, spicy beef ribs, beef rib soup, cheese pork ribs, boneless chicken feet, pork cartilage, Korean restaurant menu, Korean food District 2, Galbijjim" />
        <meta property="og:type" content="restaurant.menu" />
        <meta property="og:title" content="Menu | THE ZZIM Giant Spicy Beef Ribs, Beef Rib Soup" />
        <meta property="og:description" content="Giant spicy beef ribs, beef rib soup, cheese pork ribs, boneless chicken feet. 5 spice levels. Featured on Prison Playbook, Siksin Road." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp" />
        <meta property="og:url" content="https://thezzimvn.com/en/menu" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu | THE ZZIM Giant Spicy Beef Ribs" />
        <meta name="twitter:description" content="Giant spicy beef ribs, beef rib soup, cheese pork ribs. 5 spice levels." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/en/menu" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361061/menu-hero-signature-giant-beef-rib-soup-galbitang-suon-bo-khong-lo.webp" 
          alt="THE ZZIM Signature Menu"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Premium Beef Rib Stew</p>
          <h1 className="hero-title">MENU</h1>
          <p className="hero-description">THE ZZIM signature menu crafted with dedication</p>
          <a href="tel:+84825251004" className="hero-cta">Reserve Now</a>
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
                À La Carte
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
          <p className="spicy-level-subtitle">Choose your spice level</p>

          <div className="spicy-caution">
            <span className="caution-icon">🔥</span>
            <p>
              <strong>Caution:</strong> The Zzim's special sauce is <span className="highlight">much spicier than typical</span>. 
              Deep, rich spiciness without capsaicin, <span className="highlight">please choose carefully according to your taste</span>.
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
            * All dishes at The Zzim are prepared with 'localized recipes' adapted to local ingredients and environment. We apologize for not being able to satisfy 100% of everyone's taste, but we will continue to improve based on customer feedback.
          </p>
        </div>
      </section>
    </>
  );
}
