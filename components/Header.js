import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ko');
  const router = useRouter();

  useEffect(() => {
    const path = router.asPath;
    if (path.startsWith('/vi')) setCurrentLang('vi');
    else if (path.startsWith('/en')) setCurrentLang('en');
    else setCurrentLang('ko');
  }, [router.asPath]);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const openReserveModal = (e) => { 
    e.preventDefault(); 
    setReserveModalOpen(true); 
    setMenuOpen(false); 
  };
  const closeReserveModal = () => setReserveModalOpen(false);

  const getLink = (page) => `/${currentLang}${page}`;
  const getLangLink = (lang) => {
    const path = router.asPath.replace(/^\/(ko|vi|en)/, '');
    return `/${lang}${path || ''}`;
  };

  const handleLangChange = (e) => {
    router.push(getLangLink(e.target.value));
    closeMenu();
  };

  const navItems = {
    ko: { home: '홈', about: '브랜드 스토리', menu: '메뉴', location: '매장위치', magazine: '매거진', reserve: '예약하기' },
    vi: { home: 'TRANG CHỦ', about: 'VỀ THE ZZIM', menu: 'THỰC ĐƠN', location: 'LIÊN HỆ', magazine: 'TIN TỨC', reserve: 'Đặt bàn' },
    en: { home: 'HOME', about: 'BRAND STORY', menu: 'MENU', location: 'LOCATION', magazine: 'MAGAZINE', reserve: 'Reserve' }
  };
  const t = navItems[currentLang];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link href={getLink('')} className="header-logo">
            <img
              src="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_200/v1766361064/logo.png"
              alt="THE ZZIM"
              className="logo-image"
            />
          </Link>

          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <Link href={getLink('')} className="nav-link" onClick={closeMenu}>{t.home}</Link>
            <Link href={getLink('/about')} className="nav-link" onClick={closeMenu}>{t.about}</Link>
            <Link href={getLink('/menu')} className="nav-link" onClick={closeMenu}>{t.menu}</Link>
            <Link href={getLink('/location')} className="nav-link" onClick={closeMenu}>{t.location}</Link>
            <Link href={getLink('/magazine')} className="nav-link" onClick={closeMenu}>{t.magazine}</Link>
            
            <div className="mobile-lang-reserve">
              <select 
                value={currentLang} 
                onChange={handleLangChange}
                className="mobile-lang-select"
              >
                <option value="ko">한국어</option>
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
              </select>
              <button className="mobile-reserve-btn" onClick={openReserveModal}>{t.reserve}</button>
            </div>
          </nav>

          <div className="header-right">
            <div className="language-selector">
              <Link href={getLangLink('vi')} className={`lang-btn ${currentLang === 'vi' ? 'active' : ''}`}>VN</Link>
              <Link href={getLangLink('ko')} className={`lang-btn ${currentLang === 'ko' ? 'active' : ''}`}>KO</Link>
              <Link href={getLangLink('en')} className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}>EN</Link>
            </div>
            <button className="reserve-btn" onClick={openReserveModal}>{t.reserve}</button>
          </div>

          <button className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {menuOpen && <div className="mobile-menu-overlay" onClick={closeMenu}></div>}

      {reserveModalOpen && (
        <>
          <div className="reserve-modal-overlay" onClick={closeReserveModal}></div>
          <div className="reserve-modal">
            <h2 className="reserve-modal-title">{t.reserve}</h2>
            <div className="reserve-modal-buttons">
              <a 
                href="https://zalo.me/0825251004" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="reserve-modal-btn reserve-modal-btn-zalo" 
                onClick={closeReserveModal}
              >
                <img 
                  src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766883925/zalo.png" 
                  alt="Zalo" 
                  style={{width:'24px',height:'24px'}} 
                />
                <span>Zalo</span>
              </a>
              <a 
                href="tel:+84825251004" 
                className="reserve-modal-btn reserve-modal-btn-phone" 
                onClick={closeReserveModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>Call</span>
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
