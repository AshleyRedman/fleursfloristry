'use client';

import { cloudinary } from '@/src/lib/cdn';
import { HTMLAttributes } from 'react';
import { cn } from '../lib/helpers';

export default function Image({
    filename,
    alt,
    width,
    loading = 'lazy',
    path = 'fleursfloristry',
    ...rest
}: {
    filename: string;
    alt: string;
    width: number;
    path?: string;
    loading?: 'eager' | 'lazy';
} & HTMLAttributes<HTMLPictureElement>) {
    return (
        <picture>
            <source srcSet={cloudinary(filename, path, 'webp', width)} type='image/webp' />
            <source srcSet={cloudinary(filename, path, 'png', width)} type='image/png' />
            <img
                {...rest}
                src={cloudinary(filename, path, 'png', width)}
                width={width}
                aria-label={alt}
                className={cn('', rest.className)}
                loading={loading}
            />
        </picture>
    );
}
