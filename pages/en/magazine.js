// pages/en/magazine.js
import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Category Info
const categories = [
  { id: 'all', label: 'All' },
  { id: 'news', label: 'THE ZZIM News' },
  { id: 'life', label: 'HCMC Life' },
  { id: 'hotplace', label: 'Hot Places' }
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
              const res = await fetch(`/blog/en/${cat}/index.json`);
              if (res.ok) {
                const data = await res.json();
                allPosts.push(...data.map(post => ({ ...post, category: cat })));
              }
            } catch (e) {
              console.log(`Failed to load ${cat} category`);
            }
          }
          
          allPosts.sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO));
          setPosts(allPosts);
        } else {
          const res = await fetch(`/blog/en/${activeCategory}/index.json`);
          if (res.ok) {
            const data = await res.json();
            setPosts(data.map(post => ({ ...post, category: activeCategory })));
          } else {
            setPosts([]);
          }
        }
      } catch (error) {
        console.error('Error loading posts:', error);
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
        <title>Magazine | THE ZZIM HCMC Food & Lifestyle News</title>
        <meta name="description" content="THE ZZIM Magazine. HCMC restaurant info, Korean food stories, HCMC lifestyle, Vietnam living tips, hot place introductions. HCMC stories from THE ZZIM." />
        <meta name="keywords" content="THE ZZIM magazine, HCMC restaurant blog, HCMC hot places, HCMC lifestyle, Korean food stories, living in Vietnam, Ho Chi Minh food blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Magazine | THE ZZIM HCMC Food & Lifestyle News" />
        <meta property="og:description" content="HCMC restaurants, lifestyle, hot places info. HCMC stories from THE ZZIM." />
        <meta property="og:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" />
        <meta property="og:url" content="https://thezzimvn.com/en/magazine" />
        <meta property="og:site_name" content="THE ZZIM" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Magazine | THE ZZIM HCMC Food & Lifestyle News" />
        <meta name="twitter:description" content="HCMC restaurants, lifestyle, hot places info. THE ZZIM Magazine." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dy1qvsk0q/image/upload/f_auto,q_auto,w_1200/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="THE ZZIM" />
        <link rel="canonical" href="https://thezzimvn.com/en/magazine" />
      </Head>

      {/* Hero Section */}
      <section className="hero">
        <img 
          src="https://res.cloudinary.com/dy1qvsk0q/image/upload/v1766361059/magazine-hero-ho-chi-minh-city-night-view-lifestyle-food-guide.webp" 
          alt="THE ZZIM Magazine"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <p className="hero-subtitle">THE ZZIM</p>
          <h1 className="hero-title">MAGAZINE</h1>
          <p className="hero-description">Discover various news from THE ZZIM</p>
        </div>
      </section>

      {/* Magazine Section */}
      <section className="magazine-section">
        <div className="magazine-container">
          <p className="magazine-label">MAGAZINE</p>
          <h2 className="magazine-title">THE ZZIM Magazine</h2>

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
              <p>Loading posts...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="magazine-empty">
              <p>No posts available.</p>
            </div>
          ) : (
            <div className="magazine-grid">
              {posts.map((post, index) => (
                <Link 
                  href={`/en/magazine/${post.slug}?category=${post.category}`} 
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
