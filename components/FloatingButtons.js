// components/FloatingButtons.js

import Link from 'next/link';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
<Link
  href="/menu#menu-tabs"
  scroll={false}
  className="floating-btn floating-btn-shortcut floating-btn-menu"
  aria-label="메뉴 바로가기"
>
  <span className="floating-btn-text">MENU</span>
</Link>

      <Link
        href="/location#location-title"
        scroll={false}
        className="floating-btn floating-btn-shortcut floating-btn-location"
        aria-label="위치 바로가기"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="floating-btn-icon" aria-hidden="true">
          <path d="M12 2c-3.31 0-6 2.69-6 6 0 4.5 6 14 6 14s6-9.5 6-14c0-3.31-2.69-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 5.5 12 5.5s2.5 1.12 2.5 2.5S13.38 10.5 12 10.5z" />
        </svg>
      </Link>

      <a
        href="https://zalo.me/0825251004"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-zalo"
        aria-label="Zalo로 연락하기"
      >
        <img
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766883925/zalo.png"
          alt="Zalo"
          className="floating-btn-icon"
        />
      </a>

      <a
        href="tel:+84825251004"
        className="floating-btn floating-btn-phone"
        aria-label="전화하기"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="floating-btn-icon" aria-hidden="true">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      </a>
    </div>
  );
}

