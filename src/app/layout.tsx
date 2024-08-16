import type { Metadata } from "next";
import { Providers } from "./providers";
import Head from "next/head";
import { Footer } from "@/components/nav/Footer";
import { KakaoButton } from "@/components/KakaoButton";
import { META } from "../constants/metadata";
import "./globals.css";

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  openGraph: {
    images: [{ url: '/opengraph-image.png', alt: '올리코퍼레이션' }],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{META.title}</title>
        <link rel="canonical" href={META.url} />
        <meta name="description" content={META.description} />

        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.ogImage} />
        <meta property="og:url" content={META.url} />

        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={META.ogImage} />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Providers>
          {children}
          <KakaoButton />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
