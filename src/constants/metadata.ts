export const SITE_URL = "https://www.olicorp.kr"
export const META = {
  title: '올리코퍼레이션',
  siteName: '마케팅에이전시 올리코퍼레이션',
  description:
    "마케팅에이전시 올리코퍼레이션 | 평범한 마케팅회사를 찾으시면 절대 문의하지 마세요. 저희는 장기적인 비즈니스 파트너를 원합니다. 대표님의 성공이 곧 저희의 성공이기 때문이죠. 더 이상 당하지 마세요! 돈 받고 무책임하게 대처하는 수많은 회사들..답답하셨죠? 이제 저희와 함께 사업을 더 높이 '올리'실 차례입니다.",
  keyword: [
    '마케팅',
    '바이럴마케팅',
    '마케팅 실행사',
    '광고 집행',
    '광고 컨설팅',
  ],
  url: SITE_URL,
  googleVerification: '-mTp3tTeT8C73D3xDgb2IZ6q9xuIl8pGhgTbIKMJk-s',
  naverVerification: 'xxx',
  ogImage: '/opengraph-image.png',
} as const;

export const getMetadata = (metadataProps?: any) => {
  const { title, description, asPath, ogImage } = metadataProps || {};

  const TITLE = title ? `${title} | 올리코퍼레이션` : META.title;
  const DESCRIPTION = description || META.description;
  const PAGE_URL = asPath ? asPath : '';
  const OG_IMAGE = ogImage || META.ogImage;

  const metadata: any = {
    metadataBase: new URL(META.url),
    alternates: {
      canonical: PAGE_URL,
    },
    title: TITLE,
    description: DESCRIPTION,
    keywords: [...META.keyword],
    openGraph: {
      title: TITLE,
      description: DESCRIPTION,
      siteName: TITLE,
      locale: 'ko_KR',
      type: 'website',
      url: PAGE_URL,
      images: {
        url: OG_IMAGE,
      },
    },
    verification: {
      google: META.googleVerification,
      other: {
        'naver-site-verification': META.naverVerification,
      },
    },
    twitter: {
      title: TITLE,
      description: DESCRIPTION,
      images: {
        url: OG_IMAGE,
      },
    },
  };

  return metadata;
};