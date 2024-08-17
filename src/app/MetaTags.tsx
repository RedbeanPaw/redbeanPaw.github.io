import React from "react";
import { META } from "@/constants/metadata";

export default function MetaTags({ }) {

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: META.title,
        url: META.url,
        logo: `${META.url}/opengraph.png`,
    }

    return <>
        <meta name="description" content={META.description} />
        <meta name="keywords" content={META.keyword.toString()} />
        <meta name="author" content={META.siteName} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={`${META.url}/opengraph.png`} />
        <meta property="og:url" content={META.url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={META.siteName} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={`${META.url}/opengraph.png`} />
        <meta name="twitter:title" content={META.title} />
        <meta name="twitter:description" content={META.description} />
        <meta name="twitter:image" content={`${META.url}/opengraph.png`} />
        <meta name="twitter:site" content={META.url} />
        <meta name="twitter:creator" content={META.siteName} />

        {/* Canonical Tag */}
        <link rel="canonical" href={META.url} />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Additional SEO Considerations */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="application-name" content={META.title} />
        <meta name="apple-mobile-web-app-title" content={META.title} />

        {/* Site Verification */}
        <meta name="google-site-verification" content={META.googleVerification} />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
}