import { useState } from 'react'
import Head from 'next/head'

export default function Write() {
  const [formData, setFormData] = useState({
    // 기본 정보
    category: 'news',
    title: '',
    description: '',
    content: '',
    image: '',
    keywords: '',
    
    // SEO 메타 태그
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    
    // Open Graph (Facebook, LinkedIn)
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogType: 'article',
    
    // Twitter Card
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    twitterCard: 'summary_large_image',
    
    // 구조화된 데이터 (Schema.org)
    author: 'THE ZZIM',
    publisher: 'THE ZZIM',
    
    // 기타 SEO
    canonicalUrl: '',
    focusKeyword: '',
    readingTime: ''
  })

  const [preview, setPreview] = useState('')

  const categories = [
    { value: 'news', label: 'THE ZZIM 소식' },
    { value: 'life', label: '호치민 라이프' },
    { value: 'hotplace', label: '호치민 핫플' }
  ]

  function handleChange(e) {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Auto-fill SEO fields
    if (name === 'title' && !formData.seoTitle) {
      setFormData(prev => ({ ...prev, seoTitle: value }))
    }
    if (name === 'description' && !formData.seoDescription) {
      setFormData(prev => ({ ...prev, seoDescription: value }))
    }
    if (name === 'image' && !formData.ogImage) {
      setFormData(prev => ({ ...prev, ogImage: value }))
    }
  }

  function calculateReadingTime(content) {
    const wordsPerMinute = 200
    const wordCount = content.trim().split(/\s+/).length
    const minutes = Math.ceil(wordCount / wordsPerMinute)
    return `${minutes}분`
  }

  function generateSlug(title) {
    const today = new Date()
    const dateISO = today.toISOString().split('T')[0]
    const slug = title
      .toLowerCase()
      .replace(/[^가-힣a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .substring(0, 50)
    
    return `${dateISO}-${slug}`
  }

  function generateJSON() {
    const today = new Date()
    const dateISO = today.toISOString().split('T')[0]
    
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    const dateFormatted = `${year}년 ${month}월 ${day}일`

    const slug = generateSlug(formData.title)
    const categoryLabel = categories.find(c => c.value === formData.category)?.label || formData.category
    
    const readingTime = formData.readingTime || calculateReadingTime(formData.content)
    
    const postData = {
      // 기본 정보
      category: formData.category,
      categoryLabel: categoryLabel,
      title: formData.title,
      description: formData.description,
      content: formData.content,
      slug: slug,
      image: formData.image,
      date: dateFormatted,
      dateISO: dateISO,
      keywords: formData.keywords,
      
      // SEO 메타 태그
      seo: {
        title: formData.seoTitle || formData.title,
        description: formData.seoDescription || formData.description,
        keywords: formData.seoKeywords || formData.keywords,
        canonicalUrl: formData.canonicalUrl || `https://thezzim.com/magazine/${slug}`,
        focusKeyword: formData.focusKeyword
      },
      
      // Open Graph
      og: {
        title: formData.ogTitle || formData.title,
        description: formData.ogDescription || formData.description,
        image: formData.ogImage || formData.image,
        type: formData.ogType,
        url: `https://thezzim.com/magazine/${slug}`
      },
      
      // Twitter Card
      twitter: {
        card: formData.twitterCard,
        title: formData.twitterTitle || formData.title,
        description: formData.twitterDescription || formData.description,
        image: formData.twitterImage || formData.image
      },
      
      // 구조화된 데이터
      schema: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: formData.title,
        image: formData.image,
        author: {
          '@type': 'Organization',
          name: formData.author
        },
        publisher: {
          '@type': 'Organization',
          name: formData.publisher,
          logo: {
            '@type': 'ImageObject',
            url: 'https://thezzim.com/logo.png'
          }
        },
        datePublished: dateISO,
        dateModified: dateISO,
        description: formData.description
      },
      
      // 기타
      readingTime: readingTime
    }

    return {
      filename: `${slug}.json`,
      content: JSON.stringify(postData, null, 2)
    }
  }

  function handlePreview() {
    const { content } = generateJSON()
    setPreview(content)
  }

  function handleDownload() {
    const { filename, content } = generateJSON()
    
    const blob = new Blob([content], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)

    alert(`✅ ${filename} 다운로드 완료!\n\n다음 단계:\n1. GitHub에서 public/blog/ko/${formData.category}/ 폴더로 이동\n2. "Add file" → "Upload files" 클릭\n3. 다운로드한 JSON 파일 드래그\n4. "Commit changes" 클릭\n5. 2-3분 후 자동 배포됨`)
  }

  return (
    <>
      <Head>
        <title>글쓰기 | THE ZZIM 관리자</title>
      </Head>

      <div className="admin-write-page">
        <div className="admin-container">
          
          <header className="admin-header">
            <h1>📝 블로그 글쓰기 (SEO 최적화)</h1>
            <p>글 정보를 입력하고 JSON 파일을 다운로드하세요</p>
          </header>

          <div className="admin-form">
            
            {/* ========== 기본 정보 ========== */}
            <div className="form-section">
              <h2 className="section-title">📄 기본 정보</h2>
              
              {/* Category */}
              <div className="form-group">
                <label>카테고리 *</label>
                <select 
                  name="category" 
                  value={formData.category}
                  onChange={handleChange}
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Title */}
              <div className="form-group">
                <label>제목 *</label>
                <input 
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="글 제목을 입력하세요"
                />
                <small className="char-count">{formData.title.length}/60자 (권장)</small>
              </div>

              {/* Description */}
              <div className="form-group">
                <label>요약 설명 *</label>
                <textarea 
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="글 목록에 표시될 요약 설명 (150자 이내 권장)"
                  rows="3"
                />
                <small className="char-count">{formData.description.length}/160자 (권장)</small>
              </div>

              {/* Image URL */}
              <div className="form-group">
                <label>Featured Image URL *</label>
                <input 
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="https://res.cloudinary.com/..."
                />
                {formData.image && (
                  <div className="image-preview">
                    <img src={formData.image} alt="Preview" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="form-group">
                <label>본문 내용 * (HTML 가능)</label>
                <textarea 
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="글 본문을 입력하세요. HTML 태그 사용 가능합니다.&#10;&#10;예시:&#10;<h2>소제목</h2>&#10;<p>본문 내용...</p>&#10;<img src='이미지URL' alt='설명' />"
                  rows="15"
                />
                <small className="char-count">
                  예상 읽기 시간: {calculateReadingTime(formData.content)}
                </small>
              </div>

              {/* Keywords */}
              <div className="form-group">
                <label>키워드 (쉼표로 구분)</label>
                <input 
                  type="text"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleChange}
                  placeholder="더찜, 갈비찜, 호치민, 맛집"
                />
              </div>
            </div>

            {/* ========== SEO 설정 ========== */}
            <div className="form-section">
              <h2 className="section-title">🔍 SEO 설정</h2>
              
              <div className="seo-hint">
                💡 비워두면 기본 정보가 자동으로 사용됩니다
              </div>

              {/* SEO Title */}
              <div className="form-group">
                <label>SEO 제목 (검색 결과 제목)</label>
                <input 
                  type="text"
                  name="seoTitle"
                  value={formData.seoTitle}
                  onChange={handleChange}
                  placeholder="검색 결과에 표시될 제목 (60자 이내)"
                />
                <small className="char-count">{formData.seoTitle.length}/60자</small>
              </div>

              {/* SEO Description */}
              <div className="form-group">
                <label>SEO 설명 (검색 결과 설명)</label>
                <textarea 
                  name="seoDescription"
                  value={formData.seoDescription}
                  onChange={handleChange}
                  placeholder="검색 결과에 표시될 설명 (160자 이내)"
                  rows="3"
                />
                <small className="char-count">{formData.seoDescription.length}/160자</small>
              </div>

              {/* SEO Keywords */}
              <div className="form-group">
                <label>SEO 키워드</label>
                <input 
                  type="text"
                  name="seoKeywords"
                  value={formData.seoKeywords}
                  onChange={handleChange}
                  placeholder="검색 엔진용 키워드 (쉼표로 구분)"
                />
              </div>

              {/* Focus Keyword */}
              <div className="form-group">
                <label>집중 키워드 (Primary Keyword)</label>
                <input 
                  type="text"
                  name="focusKeyword"
                  value={formData.focusKeyword}
                  onChange={handleChange}
                  placeholder="이 글의 메인 키워드 1개 (예: 호치민 갈비찜)"
                />
              </div>

              {/* Canonical URL */}
              <div className="form-group">
                <label>Canonical URL (표준 URL)</label>
                <input 
                  type="url"
                  name="canonicalUrl"
                  value={formData.canonicalUrl}
                  onChange={handleChange}
                  placeholder="https://thezzim.com/magazine/..."
                />
                <small>중복 콘텐츠 방지용 (선택사항)</small>
              </div>

              {/* Author */}
              <div className="form-group">
                <label>작성자</label>
                <input 
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  placeholder="THE ZZIM"
                />
              </div>
            </div>

            {/* ========== 소셜 미디어 ========== */}
            <div className="form-section">
              <h2 className="section-title">🌐 소셜 미디어 설정</h2>
              
              <div className="seo-hint">
                💡 소셜 미디어 공유 시 표시될 정보
              </div>

              <h3 className="subsection-title">📘 Facebook / LinkedIn (Open Graph)</h3>

              {/* OG Title */}
              <div className="form-group">
                <label>OG 제목</label>
                <input 
                  type="text"
                  name="ogTitle"
                  value={formData.ogTitle}
                  onChange={handleChange}
                  placeholder="Facebook 공유 시 제목"
                />
              </div>

              {/* OG Description */}
              <div className="form-group">
                <label>OG 설명</label>
                <textarea 
                  name="ogDescription"
                  value={formData.ogDescription}
                  onChange={handleChange}
                  placeholder="Facebook 공유 시 설명"
                  rows="2"
                />
              </div>

              {/* OG Image */}
              <div className="form-group">
                <label>OG 이미지</label>
                <input 
                  type="url"
                  name="ogImage"
                  value={formData.ogImage}
                  onChange={handleChange}
                  placeholder="https://... (1200x630px 권장)"
                />
                {formData.ogImage && (
                  <div className="image-preview">
                    <img src={formData.ogImage} alt="OG Preview" />
                  </div>
                )}
              </div>

              <h3 className="subsection-title">🐦 Twitter / X</h3>

              {/* Twitter Title */}
              <div className="form-group">
                <label>Twitter 제목</label>
                <input 
                  type="text"
                  name="twitterTitle"
                  value={formData.twitterTitle}
                  onChange={handleChange}
                  placeholder="Twitter 공유 시 제목"
                />
              </div>

              {/* Twitter Description */}
              <div className="form-group">
                <label>Twitter 설명</label>
                <textarea 
                  name="twitterDescription"
                  value={formData.twitterDescription}
                  onChange={handleChange}
                  placeholder="Twitter 공유 시 설명"
                  rows="2"
                />
              </div>

              {/* Twitter Image */}
              <div className="form-group">
                <label>Twitter 이미지</label>
                <input 
                  type="url"
                  name="twitterImage"
                  value={formData.twitterImage}
                  onChange={handleChange}
                  placeholder="https://... (1200x628px 권장)"
                />
              </div>

              {/* Twitter Card Type */}
              <div className="form-group">
                <label>Twitter Card 타입</label>
                <select 
                  name="twitterCard"
                  value={formData.twitterCard}
                  onChange={handleChange}
                >
                  <option value="summary_large_image">Large Image</option>
                  <option value="summary">Summary</option>
                </select>
              </div>
            </div>

            {/* Slug Preview */}
            {formData.title && (
              <div className="slug-preview">
                📎 파일명: <strong>{generateSlug(formData.title)}.json</strong>
              </div>
            )}

            {/* Buttons */}
            <div className="admin-actions">
              <button 
                className="btn-preview"
                onClick={handlePreview}
                disabled={!formData.title || !formData.description}
              >
                🔍 미리보기
              </button>
              <button 
                className="btn-download"
                onClick={handleDownload}
                disabled={!formData.title || !formData.description || !formData.content}
              >
                💾 JSON 파일 다운로드
              </button>
            </div>

          </div>

          {/* Preview */}
          {preview && (
            <div className="json-preview">
              <h3>📄 생성된 JSON 미리보기:</h3>
              <pre>{preview}</pre>
            </div>
          )}

        </div>
      </div>
    </>
  )
}
