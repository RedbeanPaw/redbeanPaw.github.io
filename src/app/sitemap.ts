import { MetadataRoute } from 'next';
import { URL } from '@/constants/biz';
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: URL,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${URL}/contact`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ];
}