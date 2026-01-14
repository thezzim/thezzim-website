// pages/en/magazine/[slug].js
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const categories = [
  { id: 'news', label: 'THE ZZIM News' },
  { id: 'life', label: 'HCMC Life' },
  { id: 'hotplace', label: 'Hot Places' }
];

export default function MagazinePost() {
  const router = useRouter();
  const { slug, category } = router.query;
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const loadPost = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(false);

      if (category) {
        try {
          const res = await fetch(`/blog/en/${category}/${slug}.json`);
          if (res.ok) {
            const data = await res.json();
            setPost({ ...data, category });
            setLoading(false);
            return;
          }
        } catch (e) {
          console.log('Failed to load from specified category');
        }
      }

      for (const cat of ['news', 'life', 'hotplace']) {
        try {
          const res = await fetch(`/blog/en/${cat}/${slug}.json`);
          if (res.ok) {
            const data = await res.json();
            setPost({ ...data, category: cat });
            setLoading(false);
            return;
          }
        } catch (e) {
          continue;
        }
      }

      setError(true);
      setLoading(false);
    };

    loadPost();
  }, [slug, category]);

  const getCategoryLabel = (categoryId) => {
    const cat = categories.find(c => c.id === categoryId);
    return cat ? cat.label : categoryId;
  };

  if (loading) {
    return (
      <div className="magazine-post-loading">
        <p>Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="magazine-post-error">
        <h2>Post not found</h2>
        <Link href="/en/magazine" className="back-link">Back to list</Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.seo?.title || post.title} - THE ZZIM Magazine</title>
        <meta name="description" content={post.seo?.description || post.description} />
        {post.seo?.keywords && <meta name="keywords" content={post.seo.keywords} />}
        {post.og && (
          <>
            <meta property="og:title" content={post.og.title} />
            <meta property="og:description" content={post.og.description} />
            <meta property="og:image" content={post.og.image} />
            <meta property="og:type" content={post.og.type || 'article'} />
          </>
        )}
      </Head>

      <section className="post-hero">
        <div className="post-hero-background">
          <img src={post.image || '/images/hero-bg.jpg'} alt={post.title} />
          <div className="post-hero-overlay"></div>
        </div>
        <div className="post-hero-content">
          <span className="post-hero-category">{getCategoryLabel(post.category)}</span>
          <h1 className="post-hero-title">{post.title}</h1>
          <div className="post-hero-meta">
            <span className="post-hero-date">{post.date}</span>
            {post.readingTime && <span className="post-hero-reading">· {post.readingTime}</span>}
          </div>
        </div>
      </section>

      <article className="post-content-section">
        <div className="post-content-container">
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
          {post.keywords && (
            <div className="post-keywords">
              {post.keywords.split(',').map((keyword, index) => (
                <span key={index} className="post-keyword">#{keyword.trim()}</span>
              ))}
            </div>
          )}
          <div className="post-navigation">
            <Link href="/en/magazine" className="back-to-list">← Back to list</Link>
          </div>
        </div>
      </article>
    </>
  );
}
