// pages/vi/magazine.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Category Info
const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'news', label: 'Tin THE ZZIM' },
  { id: 'life', label: 'Cuộc sống HCMC' },
  { id: 'hotplace', label: 'Địa điểm hot' }
];

export default function Magazine() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      
      try {
        if (activeCategory === 'all') {
          const allPosts = [];
          
          for (const cat of ['news', 'life', 'hotplace']) {
            try {
              const res = await fetch(`/blog/vi/${cat}/index.json`);
              if (res.ok) {
                const data = await res.json();
                allPosts.push(...data.map(post => ({ ...post, category: cat })));
              }
            } catch (e) {
              console.log(`Không tải được danh mục ${cat}`);
            }
          }
          
          allPosts.sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
          setPosts(allPosts);
        } else {
          const res = await fetch(`/blog/vi/${activeCategory}/index.json`);
          if (res.ok) {
            const data = await res.json();
            setPosts(data.map(post => ({ ...post, category: activeCategory })));
          } else {
            setPosts([]);
          }
        }
      } catch (error) {
        console.error('Lỗi tải bài viết:', error);
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
        <title>Tạp Chí | THE ZZIM Tin Tức Ẩm Thực & Cuộc Sống HCMC</title>
        <meta name="description" content="Tạp chí THE ZZIM. Thông tin nhà hàng ngon HCMC, câu chuyện ẩm thực Hàn Quốc, cuộc sống HCMC, mẹo sống tại Việt Nam, giới thiệu địa điểm hot. Câu chuyện HCMC từ THE ZZIM." />
        <meta name="keywords" content="THE ZZIM magazine, blog nhà hàng HCMC, địa điểm hot HCMC, cuộc sống HCMC, câu chuyện ẩm thực Hàn Quốc, sống tại Việt Nam, Ho Chi Minh food blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tạp Chí | THE ZZIM Tin Tức Ẩm Thực & Cuộc Sống" />
        <meta property="og:description" content="Thông tin nhà hàng, cuộc sống, địa điểm hot HCMC. Câu chuyện HCMC từ THE ZZIM." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" />
        <meta property="og:url" content="https://thezzimvn.com/vi/magazine" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="vi_VN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tạp Chí | THE ZZIM Tin Tức Ẩm Thực & Cuộc Sống" />
        <meta name="twitter:description" content="Thông tin nhà hàng, cuộc sống, địa điểm hot HCMC. Tạp chí THE ZZIM." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/vi/magazine" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" 
          alt="Tạp chí THE ZZIM"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">THE ZZIM</p>
          <h1 className="hero-title">TẠP CHÍ</h1>
          <p className="hero-description">Khám phá tin tức đa dạng từ THE ZZIM</p>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="magazine-section">
        <div className="magazine-container">
          <p className="magazine-label">TẠP CHÍ</p>
          <h2 className="magazine-title">Tạp Chí THE ZZIM</h2>

          {/* Category Tabs */}
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

          {/* Posts List */}
          {loading ? (
            <div className="magazine-loading">
              <p>Đang tải bài viết...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="magazine-empty">
              <p>Chưa có bài viết nào.</p>
            </div>
          ) : (
            <div className="magazine-grid">
              {posts.map((post, index) => (
                <Link 
                  href={`/vi/magazine/${post.slug}?category=${post.category}`} 
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
