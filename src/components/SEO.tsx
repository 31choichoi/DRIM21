import React from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export default function SEO({ 
  title = "DRIM 21 | 24년차 디렉터의 매출 중심 홈페이지 제작",
  description = "단순한 디자인을 넘어 고객의 구매 여정을 설계합니다. 홈페이지제작 전문 DRIM 21, 성과로 증명하는 UX/UI 기획 노하우.",
  keywords = "홈페이지제작, 웹사이트제작, 쇼핑몰제작, 브랜드홈페이지, 반응형웹, SEO최적화, 브랜드기획"
}: SEOProps) {
  return (
    <React.Fragment>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Naver / Google Search Optimization */}
      <meta name="author" content="드림21 (DRIM 21)" />
      <link rel="canonical" href="https://dream21.kr" /> {/* Example URL */}
      
      {/* Open Graph / Facebook / Naver Blog */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="https://picsum.photos/seed/drim21/1200/630" />
      <meta property="og:url" content="https://dream21.kr" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </React.Fragment>
  );
}
