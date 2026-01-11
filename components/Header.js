import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setLangOpen(false);
  };

  const toggleLang = () => {
    setLangOpen(!langOpen);
  };

  const openReserveModal = (e) => {
    e.preventDefault();
    setReserveModalOpen(true);
    setMenuOpen(false);
    setLangOpen(false);
  };

  const closeReserveModal = () => {
    setReserveModalOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setLangOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* 로고 */}
        <Link href="/" className="header-logo">
          <img 
            src="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_200/v1766361064/logo.png" 
            alt="THE ZZIM" 
          />
        </Link>

        {/* 햄버거 버튼 (모바일) */}
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="메뉴 열기"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 네비게이션 */}
        {menuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={closeMenu}
          ></div>
        )}
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={closeMenu}>홈</Link>
          <Link href="/about" className="nav-link" onClick={closeMenu}>브랜드 스토리</Link>
          <Link href="/menu" className="nav-link" onClick={closeMenu}>메뉴</Link>
          <Link href="/location" className="nav-link" onClick={closeMenu}>매장위치</Link>
          <Link href="/magazine" className="nav-link" onClick={closeMenu}>MAGAZINE</Link>

          {/* 모바일 전용 - 언어 선택 */}
          <div className="mobile-lang-selector">
            <button 
              className={`mobile-lang-btn ${langOpen ? 'open' : ''}`}
              onClick={toggleLang}
            >
              한국어
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            <div className={`mobile-lang-dropdown ${langOpen ? 'open' : ''}`}>
              <button>Tiếng Việt</button>
              <button className="active">한국어</button>
              <button>English</button>
            </div>
          </div>

          {/* 모바일 전용 - 예약 버튼 */}
          <a href="tel:+84825251004" className="mobile-reserve-btn" onClick={closeMenu}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            예약하기
          </a>
        </nav>

        {/* 데스크톱 오른쪽 영역 */}
        <div className="header-right">
          <div className="language-selector">
            <button className="lang-btn">VN</button>
            <button className="lang-btn active">KO</button>
            <button className="lang-btn">EN</button>
          </div>
          <a href="tel:+84825251004" className="reserve-btn">
            예약하기
          </a>
        </div>
      </div>

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
    </header>
  );
}
