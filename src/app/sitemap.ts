import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://fleursfloristry.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://fleursfloristry.com/about-us',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://fleursfloristry.com/prices',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://fleursfloristry.com/testimonials',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://fleursfloristry.com/faq',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://fleursfloristry.com/gallery',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://fleursfloristry.com/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9
        }
    ];
}
