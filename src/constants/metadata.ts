export const META = {
  title: '올리코퍼레이션',
  siteName: '마케팅에이전시 올리코퍼레이션',
  description:
    '마케팅에이전시 올리코퍼레이션',
  keyword: [
    '마케팅',
    '바이럴마케팅',
  ],
  url: '',
  googleVerification: 'xxx',
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