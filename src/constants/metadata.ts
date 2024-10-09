export const SITE_URL = "https://www.olicorp.kr"
export const META = {
  title: '레드빈포 | Red Bean Paw 🐾',
  siteName: '즐겁게 작은 앱을 만드는 사람들의 모임',
  description:
    "자그마한 고양이 발자국처럼 세상에 조금 도움되는 앱을 만듭니다.",
  keyword: [
    '어플리케이션',
    '앱',
    'ios',
    'android',
    '앱개발',
  ],
  url: SITE_URL,
  googleVerification: '',
  naverVerification: '',
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
      images: [{
        url: OG_IMAGE,
      }],
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