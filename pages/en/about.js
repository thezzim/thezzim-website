// pages/en/about.js
import Head from 'next/head';

// Journey Data
const journeyData = [
  {
    year: '2013',
    title: 'Seoul, Gangnam Nonhyeon-dong',
    description: 'Started as Gangnamkong Spicy Beef Rib Stew',
    position: 'left'
  },
  {
    year: '2014',
    title: 'Siksin Road, VJ Special Forces\nSuper Junior M Guesthouse',
    description: 'Featured on major TV shows including Y-STAR Siksin Road, KBS2 VJ Special Forces, SBS Super Junior M Guesthouse!',
    position: 'right'
  },
  {
    year: '2015',
    title: 'Find Delicious TV\nSisters Choice',
    description: 'Won "Ribs Special Champion" on MBC Find Delicious TV, selected in "Spicy Battle" on MBN Sisters Choice!',
    position: 'left'
  },
  {
    year: '2016',
    title: 'Live Tonight',
    description: 'Featured on MBC Live Tonight, gaining even more recognition!',
    position: 'right'
  },
  {
    year: '2017',
    title: 'Prison Playbook\nMr. House Husband 2',
    description: 'Featured in tvN drama "Prison Playbook" as Captain Yoo\'s spicy ribs, and introduced by Lee Se Mi - Min Woo Hyuk couple on KBS2 "Mr. House Husband 2"',
    position: 'left'
  },
  {
    year: '2020',
    title: 'An Phu District 2, HCMC (HQ Relocation)',
    description: 'Closed the Korea location and opened The Zzim headquarters in An Phu, District 2, Ho Chi Minh City!',
    position: 'right'
  }
];

// Philosophy Data
const philosophyData = [
  {
    icon: '🇰🇷',
    title: 'Principles Since 2013',
    description: 'Preserving the know-how of Seoul Gangnam\'s famous queue restaurant "Gangnamkong". Original recipe unchanged over time.'
  },
  {
    icon: '🌶️',
    title: 'Natural Spiciness',
    description: 'Absolutely no artificial capsaicin. Only premium chili powder and fruits fermented to create a stomach-friendly spicy taste.'
  },
  {
    icon: '⭐',
    title: 'The Art of Waiting',
    description: 'We don\'t make fast food. Cooked upon order, taking time to ensure deep flavors and dedication in every dish.'
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>Brand Story | THE ZZIM Legend From Gangnam Since 2013</title>
        <meta name="description" content="Started in 2013 at Nonhyeon-dong, Gangnam, Seoul as 'Gangnamkong'. Featured on tvN Prison Playbook, Y-STAR Siksin Road, MBC Find Delicious TV. Natural spicy philosophy without capsaicin. Expanded to An Phu HCMC in 2020." />
        <meta name="keywords" content="THE ZZIM story, Gangnamkong, Gangnam beef ribs, Prison Playbook beef ribs, Siksin Road, Korean restaurant history, giant beef ribs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Brand Story | THE ZZIM Legend From Gangnam" />
        <meta property="og:description" content="Started in 2013 at Gangnam. Featured on Prison Playbook, Siksin Road. 13 years of spicy beef rib tradition." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" />
        <meta property="og:url" content="https://thezzimvn.com/en/about" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Brand Story | THE ZZIM Legend From Gangnam" />
        <meta name="twitter:description" content="Started in 2013 at Gangnam. Featured on Prison Playbook, Siksin Road. 13 years tradition." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/en/about" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" 
          alt="THE ZZIM Brand Story"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">SINCE 2013</p>
          <h1 className="hero-title">THE ZZIM</h1>
          <p className="hero-description">Gangnam, The Legendary Spice.</p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story-section">
        <div className="section-container">
          
          {/* Story 1 */}
          <div className="story-block">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361042/brand-story-01-origin-since-2013-seoul-gangnamkong-legend.webp" alt="Gangnamkong Restaurant" />
            </div>
            <div className="story-content">
              <p className="story-label">2013 · Seoul Gangnam</p>
              <h2 className="story-title">2013, Seoul's Legend<br />'Gangnamkong' Was The Beginning</h2>
              <p className="story-text">
                In 2013, we first opened in Seoul under the name 'Gangnamkong'. 
                Without fancy marketing, just <span className="highlight">'addictive spicy taste'</span> spread 
                by word of mouth, becoming a famous Seoul restaurant with long queues. 
                Not a restaurant that appears and disappears with trends. 13 years 
                (Time) proves our taste.
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="story-block reverse">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361042/brand-story-02-philosophy-authentic-spicy-galbijjim-no-capsaicin.webp" alt="Spicy Beef Rib Stew" />
            </div>
            <div className="story-content">
              <p className="story-label">Philosophy</p>
              <h2 className="story-title">We Reject Artificial Spiciness</h2>
              <p className="story-text">
                We don't use capsaicin for easy spiciness. We believe only 
                <span className="highlight">natural spiciness fermented with premium chili powder and fruits</span> 
                makes your stomach comfortable and keeps you reaching for more. 
                <span className="highlight">'The Most Authentic Korean Spice'</span> - 
                Even in Vietnam, The Zzim's stubbornness never compromises on ingredients.
              </p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="story-block">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361043/brand-story-03-location-ho-chi-minh-district-2-an-phu-interior.webp" alt="THE ZZIM Ho Chi Minh" />
            </div>
            <div className="story-content">
              <p className="story-label">Present · An Phu District 2</p>
              <h2 className="story-title">An Phu District 2, HCMC<br />A Space of Relaxation</h2>
              <p className="story-text">
                Away from the busy city center, we settled in a quiet alley 
                in An Phu, District 2, Ho Chi Minh City. The name changed to 
                <span className="highlight">The Zzim</span>, but the person in the kitchen 
                and the dedication to taste remain the same. In a comfortable 
                space with easy parking, we serve that authentic Seoul taste.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="section-container">
          <h2 className="journey-main-title">OUR JOURNEY</h2>
          <p className="journey-main-subtitle">From Seoul Gangnam to An Phu HCMC, 13 Years of Journey</p>

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

      {/* Philosophy Section */}
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
