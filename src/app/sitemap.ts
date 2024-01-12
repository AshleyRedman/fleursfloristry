import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://www.fleursfloristry.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1
        },
        {
            url: 'https://www.fleursfloristry.com/about-us',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://www.fleursfloristry.com/prices',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://www.fleursfloristry.com/testimonials',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://www.fleursfloristry.com/faq',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://www.fleursfloristry.com/gallery',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.8
        },
        {
            url: 'https://www.fleursfloristry.com/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.9
        }
    ];
}
