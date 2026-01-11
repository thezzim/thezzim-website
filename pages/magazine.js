// pages/magazine.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// 카테고리 정보
const categories = [
  { id: 'all', label: '전체보기' },
  { id: 'news', label: 'THE ZZIM 소식' },
  { id: 'life', label: '호치민 라이프' },
  { id: 'hotplace', label: '호치민 핫플' }
];

export default function Magazine() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 카테고리별 게시글 로드
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      
      try {
        if (activeCategory === 'all') {
          const allPosts = [];
          
          for (const cat of ['news', 'life', 'hotplace']) {
            try {
              const res = await fetch(`/blog/ko/${cat}/index.json`);
              if (res.ok) {
                const data = await res.json();
                allPosts.push(...data.map(post => ({ ...post, category: cat })));
              }
            } catch (e) {
              console.log(`${cat} 카테고리 로드 실패`);
            }
          }
          
          allPosts.sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
          setPosts(allPosts);
        } else {
          const res = await fetch(`/blog/ko/${activeCategory}/index.json`);
          if (res.ok) {
            const data = await res.json();
            setPosts(data.map(post => ({ ...post, category: activeCategory })));
          } else {
            setPosts([]);
          }
        }
      } catch (error) {
        console.error('게시글 로드 오류:', error);
        setPosts([]);
      }
      
      setLoading(false);
    };

    loadPosts();
  }, [activeCategory]);

  const getCategoryLabel = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.label : categoryId;
  };

  return (
    <>
      <Head>
        <title>매거진 - THE ZZIM 더찜</title>
        <meta name="description" content="THE ZZIM 소식, 호치민 라이프, 호치민 핫플레이스 정보" />
      </Head>

    {/* 히어로 섹션 */}
<section className="hero">
  <img 
    src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" 
    alt="THE ZZIM 매거진"
    className="hero-background"
  />
  <div className="hero-overlay"></div>
  <div className="hero-content">
    <p className="hero-subtitle">THE ZZIM</p>
    <h1 className="hero-title">MAGAZINE</h1>
    <p className="hero-description">더찜의 다양한 소식을 만나보세요</p>
  </div>
</section>


      {/* 매거진 섹션 */}
      <section className="magazine-section">
        <div className="magazine-container">
          <p className="magazine-label">MAGAZINE</p>
          <h2 className="magazine-title">THE ZZIM 매거진</h2>

          {/* 카테고리 탭 */}
          <div className="magazine-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`magazine-tab ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 게시글 목록 */}
          {loading ? (
            <div className="magazine-loading">
              <p>게시글을 불러오는 중...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="magazine-empty">
              <p>등록된 게시글이 없습니다.</p>
            </div>
          ) : (
            <div className="magazine-grid">
              {posts.map((post, index) => (
                <Link 
                  href={`/magazine/${post.slug}?category=${post.category}`} 
                  key={index} 
                  className="magazine-card"
                >
                  <div className="magazine-card-image">
                    <img src={post.image || '/images/default-post.jpg'} alt={post.title} />
                    <span className="magazine-card-category">
                      {getCategoryLabel(post.category)}
                    </span>
                  </div>
                  <div className="magazine-card-content">
                    <h3 className="magazine-card-title">{post.title}</h3>
                    <p className="magazine-card-description">{post.description}</p>
                    <div className="magazine-card-meta">
                      <span className="magazine-card-date">{post.date}</span>
                      {post.readingTime && (
                        <span className="magazine-card-reading">· {post.readingTime}</span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
