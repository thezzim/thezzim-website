// pages/vi/about.js
import Head from 'next/head';

// Dữ liệu hành trình
const journeyData = [
  {
    year: '2013',
    title: 'Nonhyeon-dong, Gangnam-gu, Seoul',
    description: 'Bắt đầu với Gangnamkong Sườn Bò Hầm Cay',
    position: 'left'
  },
  {
    year: '2014',
    title: 'Siksin Road, Ssaengsaeng Information\nSuper Junior M Guest House',
    description: 'Được giới thiệu trên các chương trình nổi tiếng: Y-STAR Siksin Road, KBS2 Ssaengsaeng Information, SBS Super Junior M Guest House',
    position: 'right'
  },
  {
    year: '2015',
    title: 'Find Delicious TV\nSisters\' Choice',
    description: 'Thắng giải \'Sườn Bò Hầm Cay Special\' trên MBC Find Delicious TV, và được công nhận về độ cay trên MBN Sisters\' Choice \'Spicy Battle\'',
    position: 'left'
  },
  {
    year: '2016',
    title: 'Live Today Evening',
    description: 'Chi nhánh Suwon Ingye-dong được giới thiệu trên MBC Live Today Evening, được nhiều người biết đến hơn',
    position: 'right'
  },
  {
    year: '2017',
    title: 'Prison Playbook\nMr. House Husband Season 2',
    description: 'Sườn Bò Hầm Cay \'Bonding\' từ phim tvN \'Prison Playbook\', và \'Sườn Heo Phô Mai\' từ KBS2 \'Mr. House Husband Season 2\' được giới thiệu',
    position: 'left'
  },
  {
    year: '2020',
    title: 'An Phú, Quận 2, TP.HCM (Di dời cửa hàng chính)',
    description: 'Đóng cửa các cửa hàng ở Hàn Quốc, chuyển và mở cửa hàng chính The Zzim(더찜) tại An Phú, Quận 2, TP.HCM',
    position: 'right'
  }
];

// Dữ liệu triết lý
const philosophyData = [
  {
    icon: '🇰🇷',
    title: 'Nguyên tắc từ năm 2013',
    description: 'Công thức từ \'Gangnamkong\', quán nổi tiếng ở Gangnam, Seoul. Chúng tôi giữ nguyên công thức gốc, không bao giờ thay đổi.'
  },
  {
    icon: '🌶️',
    title: 'Vị cay từ thiên nhiên',
    description: 'Tuyệt đối không dùng capsaicin nhân tạo. Chúng tôi chỉ dùng trái cây, rau củ cao cấp và ớt bột để lên men, tạo vị cay tự nhiên, dễ chịu cho bụng.'
  },
  {
    icon: '⭐',
    title: 'Nghệ thuật chờ đợi',
    description: 'Chúng tôi không làm đồ ăn nhanh. Mỗi món được nấu ngay khi đặt, dù mất thời gian, để mang đến hương vị sâu đậm và tấm lòng chân thành trong từng bát.'
  }
];

export default function About() {
  return (
    <>
      <Head>
        <title>Câu Chuyện Thương Hiệu | THE ZZIM Huyền Thoại Từ Gangnam 2013</title>
        <meta name="description" content="Năm 2013, bắt đầu từ 'Gangnamkong' ở Seoul Gangnam. Xuất hiện trên tvN Prison Playbook, Y-STAR Siksin Road, MBC Find Delicious TV. Triết lý vị cay tự nhiên không capsaicin. Năm 2020 mở rộng đến An Phú, TP.HCM." />
        <meta name="keywords" content="THE ZZIM, Gangnamkong, sườn bò hầm cay, nhà hàng Hàn Quốc, Quận 2, An Phú, TP.HCM, Prison Playbook, Siksin Road" />
        
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Câu Chuyện Thương Hiệu | THE ZZIM Huyền Thoại Từ Gangnam" />
        <meta property="og:description" content="Bắt đầu từ Gangnam năm 2013. Xuất hiện trên Prison Playbook, Siksin Road. 13 năm truyền thống sườn bò hầm cay." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" />
        <meta property="og:url" content="https://thezzimvn.com/vi/about" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="vi_VN" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Câu Chuyện Thương Hiệu | THE ZZIM Huyền Thoại Từ Gangnam" />
        <meta name="twitter:description" content="Bắt đầu từ Gangnam năm 2013. Xuất hiện trên Prison Playbook, Siksin Road. 13 năm truyền thống." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" />
        
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/vi/about" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361053/brand-story-hero-since-2013-from-seoul-gangnamkong-to-ho-chi-minh-heritage.webp" 
          alt="THE ZZIM Câu Chuyện Thương Hiệu"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">SINCE 2013</p>
          <h1 className="hero-title">THE ZZIM</h1>
          <p className="hero-description">Gangnam, Hương vị cay huyền thoại.</p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="brand-story-section">
        <div className="section-container">
          
          {/* Story 1 */}
          <div className="story-block">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361042/brand-story-01-origin-since-2013-seoul-gangnamkong-legend.webp" alt="Nhà hàng Gangnamkong" />
            </div>
            <div className="story-content">
              <p className="story-label">2013 · Seoul Gangnam</p>
              <h2 className="story-title">2013, Bắt đầu từ 'Gangnamkong' ở Seoul</h2>
              <p className="story-text">
                Năm 2013, chúng tôi mở cửa hàng đầu tiên tại Seoul với tên 'Gangnamkong'. 
                Không cần quảng cáo rầm rộ, chỉ nhờ <span className="highlight">'vị cay gây nghiện'</span> mà khách xếp hàng dài, 
                trở thành quán ăn nổi tiếng ở Seoul. Không phải quán theo mốt rồi biến mất. 
                <span className="highlight">13 năm</span> đã chứng minh hương vị của chúng tôi.
              </p>
            </div>
          </div>

          {/* Story 2 */}
          <div className="story-block reverse">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361042/brand-story-02-philosophy-authentic-spicy-galbijjim-no-capsaicin.webp" alt="Sườn bò hầm cay" />
            </div>
            <div className="story-content">
              <p className="story-label">Triết lý</p>
              <h2 className="story-title">Không dùng vị cay nhân tạo</h2>
              <p className="story-text">
                Chúng tôi không dùng capsaicin để tạo vị cay dễ dàng. <span className="highlight">Chỉ có vị cay tự nhiên, 
                lên men từ ớt bột cao cấp và trái cây</span>, mới giúp bụng bạn dễ chịu và khiến bạn không thể ngừng ăn. 
                <span className="highlight">'Vị cay đậm chất Hàn Quốc'</span> - Đây là cam kết của The Zzim: không thỏa hiệp về nguyên liệu, 
                dù ở đất nước xa lạ như Việt Nam.
              </p>
            </div>
          </div>

          {/* Story 3 */}
          <div className="story-block">
            <div className="story-image">
              <img src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361043/brand-story-03-location-ho-chi-minh-district-2-an-phu-interior.webp" alt="THE ZZIM TP.HCM" />
            </div>
            <div className="story-content">
              <p className="story-label">Hiện tại · An Phú, Quận 2, TP.HCM</p>
              <h2 className="story-title">An Phú, Quận 2, TP.HCM - Không gian thư thái</h2>
              <p className="story-text">
                Rời xa trung tâm ồn ào, chúng tôi chọn An Phú, Quận 2, TP.HCM - nơi có công viên yên tĩnh. 
                Tên đổi thành <span className="highlight">The Zzim(더찜)</span>, nhưng đầu bếp và tâm huyết với hương vị vẫn vậy. 
                Trong không gian thoải mái, không lo chỗ đậu xe, chúng tôi mang đến bạn hương vị từ Seoul.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Journey Section */}
      <section className="journey-section">
        <div className="section-container">
          <h2 className="journey-main-title">OUR JOURNEY</h2>
          <p className="journey-main-subtitle">Từ Gangnamkong ở Seoul đến The Zzim ở TP.HCM, hành trình 13 năm</p>

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