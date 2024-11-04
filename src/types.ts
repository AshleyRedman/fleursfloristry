import { z } from 'zod';

export type PageProps<T> = {
    params?: Promise<T>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export type NavItem = { label: string; href: string };

export type TestimonialType = {
    body: string;
    author: string;
    image?: { src: string; alt: string };
    link?: string;
};

export type Image = { src: string; alt: string };

export type GalleryEntry = {
    heading: string;
    subHeading: string;
    meta?: string;
    cover: CDNImage;
    items: CDNImage[];
};

export type CDNImage = {
    filename: string;
    alt: string;
    width?: number;
    path?: string;
    loading?: 'eager' | 'lazy';
};

export const schema = z
    .object({
        name: z.string().min(1, 'Name must be at least one character.'),
        partner: z.string().min(1, 'Name must be at least one character.'),
        email: z.string().email().min(1, { message: 'Please provide a valid email address.' }),
        phone: z.string().min(1, { message: 'Please provide a valid phone number.' }),
        address: z.string().optional(),
        date: z.string().optional(),
        message: z.string().optional()
    })
    .strict();

export type Form = z.infer<typeof schema>;

export type Stage = 'production' | 'preview' | 'development' | 'local';
