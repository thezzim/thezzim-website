// pages/en/index.js
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

// Set Menu Data
const setMenuData = [
  {
    name: 'The Zzim Combo 1',
    description: 'Half Beef Rib Stew + Cheese Pork Ribs (S) + Garlic Boneless Chicken Feet + Kimchi Stew + Duck Breast Salad',
    price: '1,199,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539951/menu-combo-01-the-zzim-signature-premium-galbijjim-set.webp'
  },
  {
    name: 'Best Combo',
    description: 'Full Beef Rib Stew + Cheese Pork Ribs (M) + Yuzu Boneless Chicken Feet + Beef Doenjang Soup + Seafood Salad',
    price: '1,599,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539476/menu-combo-02-best-seller-family-dining-set-recommend.webp'
  },
  {
    name: 'Couple Combo 1',
    description: 'Half Beef Rib Stew + Stone Pot Bibimbap + Kimchi Stew + Duck Breast Salad',
    price: '799,000đ',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766539476/menu-couple-combo-set-for-two-date-night-combo-1-nguoi.webp'
  }
];

// Single Menu Data
const singleMenuData = [
  {
    name: 'Giant Spicy Beef Rib Stew',
    options: [
      { label: 'Half (3 ribs)', price: '499,000đ' },
      { label: 'Full (5 ribs)', price: '699,000đ' },
      { label: 'Double (9 ribs)', price: '1,199,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361078/menu-item-01-spicy-beef-galbijjim-suon-bo-ham-cay.webp'
  },
  {
    name: 'Cheese Pork Back Ribs',
    options: [
      { label: 'Small (4 ribs, 150g cheese)', price: '359,000đ' },
      { label: 'Medium (8 ribs, 200g cheese)', price: '459,000đ' },
      { label: 'Large (12 ribs, 300g cheese)', price: '559,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361080/menu-item-02-cheese-pork-back-ribs-suon-heo-pho-mai.webp'
  },
  {
    name: 'Boneless Chicken Feet',
    options: [
      { label: 'Garlic', price: '259,000đ' },
      { label: 'Yuzu', price: '259,000đ' },
      { label: 'Spicy', price: '259,000đ' }
    ],
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361081/menu-item-03-spicy-boneless-chicken-feet-chan-ga-rut-xuong.webp'
  }
];

// Review Data
const reviewData = [
  {
    name: 'KE***',
    rating: 5,
    text: '"The location is very convenient, easy to find and parking is easy. The interior is clean and tidy, and the staff is very friendly. The food is delicious, especially the beef ribs and boneless chicken feet are a must-try...',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361090/review-01-signature-beef-galbijjim-suon-bo-ham.webp'
  },
  {
    name: 'Ja***',
    rating: 5,
    text: '"The beef rib stew reminds me of Korea! They serve soft tofu before the meal, like an appetizer soup to prepare your stomach for spicy food. This thoughtful touch deserves praise, and the tofu is very creamy...',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361092/review-02-fried-rice-bokkeumbap-com-chien-han-quoc.webp'
  },
  {
    name: 'R***',
    rating: 5,
    text: '"The beef ribs melt in your mouth the moment you take a bite... the meat just dissolves. Not chewy at all. You can choose the spice level. The soft tofu appetizer has an authentic Korean taste... soothes your stomach...',
    image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_400/v1766361093/review-03-spicy-pork-cartilage-sun-heo-xao-cay.webp'
  }
];

// Broadcast Data
const broadcastData = [
  { title: 'Prison Playbook', subtitle: 'Captain Yoo\'s Spicy Ribs', channel: 'tvN', year: '2017', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361048/media-03-netflix-k-drama-prison-playbook-featured.webp' },
  { title: 'Siksin Road', subtitle: 'Big Size Special', channel: 'Y-STAR', year: '2014', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361046/media-01-siksin-road-gourmet-variety-show.webp' },
  { title: 'Find Delicious TV', subtitle: 'Ribs Special Winner', channel: 'MBC', year: '2015', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361046/media-02-mbc-find-delicious-tv-best-korean-restaurant.webp' },
  { title: 'Mr. House Husband 2', subtitle: 'Min Woo Hyuk Episode', channel: 'KBS2', year: '2017', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361050/media-04-kbs-mr-house-husband-season2.webp' },
  { title: 'Live Tonight', subtitle: 'Giant Beef Ribs', channel: 'MBC', year: '2016', image: 'https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_300/v1766361051/media-05-mbc-live-today-evening-news.webp' },
];

const broadcastListData = [
  { title: 'VJ Special Forces', subtitle: 'Spicy Ribs Special', channel: 'KBS2', year: '2014' },
  { title: 'Super Junior M Guesthouse', subtitle: 'Star Restaurant', channel: 'SBS', year: '2014' },
  { title: 'Sisters Choice', subtitle: 'Spicy Battle', channel: 'MBN', year: '2015' },
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
      alert('Address copied to clipboard!');
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = address;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Address copied to clipboard!');
    }
  };

  const openGoogleMaps = () => {
    window.open('https://maps.app.goo.gl/2S3VxBzHiDFiWRXe6', '_blank');
  };

  return (
    <>
      <Head>
        <title>THE ZZIM | Premium Korean Spicy Beef Rib Restaurant in District 2</title>
        <meta name="description" content="Featured on tvN Prison Playbook, Y-STAR Siksin Road! Premium beef rib stew restaurant from Gangnam Seoul since 2013. Near Estella Place District 2. Spicy beef ribs, cheese pork ribs, boneless chicken feet." />
        <meta name="keywords" content="THE ZZIM, Korean restaurant District 2, spicy beef ribs, Korean restaurant An Phu, Korean restaurant Ho Chi Minh, Estella Place, cheese pork ribs, boneless chicken feet, Galbijjim" />
        <meta property="og:type" content="restaurant" />
        <meta property="og:title" content="THE ZZIM | Premium Korean Spicy Beef Rib Restaurant" />
        <meta property="og:description" content="Featured on Prison Playbook, Siksin Road! Premium beef rib stew from Gangnam Seoul, now in District 2 An Phu." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp" />
        <meta property="og:url" content="https://thezzimvn.com/en" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="THE ZZIM | Premium Korean Spicy Beef Rib Restaurant" />
        <meta name="twitter:description" content="Featured on Prison Playbook, Siksin Road! Premium beef rib stew in District 2." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/en" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_70,w_800/v1766361055/hero-01-signature-spicy-beef-ribs-suon-bo-ham-cay.webp"
          alt="THE ZZIM Signature Spicy Beef Ribs"
          className="hero-background"
          loading="eager"
          fetchpriority="high"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">Premium Beef Rib Stew</p>
          <h1 className="hero-title">THE ZZIM</h1>
          <p className="hero-description">
            <span className="hero-description-bold">Legend of Gangnam's Top 3 Beef Ribs,</span>{' '}
            <span className="hero-description-normal">now in An Phu District 2.</span>
          </p>
          <a href="#" className="hero-cta" onClick={openReserveModal}>Reserve Now</a>
        </div>
      </section>

      {/* Reserve Modal */}
      {reserveModalOpen && (
        <>
          <div className="reserve-modal-overlay" onClick={closeReserveModal}></div>
          <div className="reserve-modal">
            <h2 className="reserve-modal-title">Choose Reservation Channel</h2>
            <p className="reserve-modal-description">Please select your preferred reservation method.</p>
            
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
                <span>Reserve via Zalo</span>
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
                <span>Reserve via Phone</span>
              </a>
            </div>
          </div>
        </>
      )}

      {/* Signature Menu Section */}
      <section className="menu-section">
        <div className="section-container">
          <p className="section-subtitle">Signature</p>
          <h2 className="section-title">THE ZZIM Signature Menu</h2>
          
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
                À La Carte
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
                      <Link href="/en/menu#menu-tabs" className="menu-more-btn">View More</Link>
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
                      <Link href="/en/menu?tab=single#menu-tabs" className="menu-more-btn">View More</Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <p className="vat-notice">※All prices are subject to VAT as per current Vietnamese tax regulations.</p>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="review-section">
        <div className="section-container">
          <p className="section-subtitle">Reviews</p>
          <h2 className="section-title">Customer Reviews</h2>
          <p className="review-rating">Google 4.7 stars (524 reviews)</p>

          <div className="review-grid">
            {reviewData.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-image">
                  <img src={review.image} alt="Review image" loading="lazy" />
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
            See more reviews on Google →
          </a>
        </div>
      </section>

      {/* Media Section */}
      <section className="broadcast-section">
        <div className="section-container">
          <p className="section-subtitle">As Seen On TV</p>
          <h2 className="section-title">THE ZZIM Media Features</h2>

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
          <p className="section-subtitle">Location</p>
          <h2 className="section-title">An Phu District 2<br />2 minutes from Estella Place</h2>

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
                title="THE ZZIM location on map"
              ></iframe>
              <button className="map-btn" onClick={openGoogleMaps} aria-label="Open Google Maps">
                Open Google Maps
              </button>
            </div>

            <div className="location-info">
              <h3>The Zzim - Spicy Beef Rib Restaurant</h3>
              <p className="location-address">1B7 Đường Số 29, Khu Phố 5, Thủ Đức, Thành phố Hồ Chí Minh 71106</p>
              
              <button className="grab-btn" onClick={copyGrabAddress} aria-label="Copy Grab address">
                Copy Grab Address
              </button>

              <div className="location-hours">
                <h4>Opening Hours</h4>
                <p className="hours-main">Mon - Thu: 11:00 - 22:00</p>
                <p className="hours-break">Break Time: 14:30 - 16:30</p>
                <p className="hours-main">Fri - Sun: 11:00 - 22:00</p>
              </div>

              <div className="location-contact">
                <h4>Contact</h4>
                <p>Hotline / Zalo: <a href="tel:+84825251004">+84 82 525 1004</a></p>
              </div>

              <button className="map-link-btn" onClick={openGoogleMaps} aria-label="Open Google Maps">
                Open Google Maps
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
