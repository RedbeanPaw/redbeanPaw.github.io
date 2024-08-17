import type { Metadata } from "next";
import { Providers } from "./providers";
import Head from "next/head";
import PageLayout from "@/components/PageLayout";
import { META, getMetadata } from "../constants/metadata";
import MetaTags from "./MetaTags";
import "./globals.css";

export const metadata: Metadata = {
  // title: META.title,
  // description: META.description,
  // openGraph: {
  //   images: [{ url: '/opengraph.png', alt: '올리코퍼레이션' }],
  // }
  ...getMetadata()
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
        <MetaTags />
        <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body>
        <Providers>
          <PageLayout>
            {children}
          </PageLayout>
        </Providers>
      </body>
    </html>
  );
}
