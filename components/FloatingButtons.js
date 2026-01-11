// components/FloatingButtons.js

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
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

