'use client';

import { cloudinary } from '@/src/lib/cdn';
import { HTMLAttributes } from 'react';
import { cn } from '../lib/helpers';

export default function Image({
    filename,
    alt,
    width,
    loading = 'lazy',
    ...rest
}: {
    filename: string;
    alt: string;
    width: number;
    loading?: 'eager' | 'lazy';
} & HTMLAttributes<HTMLPictureElement>) {
    return (
        <picture>
            <source
                srcSet={cloudinary(filename, 'fleursfloristry', 'webp', width)}
                type='image/webp'
            />
            <source
                srcSet={cloudinary(filename, 'fleursfloristry', 'png', width)}
                type='image/png'
            />
            <img
                {...rest}
                src={cloudinary(filename, 'fleursfloristry', 'png', width)}
                width={width}
                aria-label={alt}
                className={cn('', rest.className)}
                loading={loading}
            />
        </picture>
    );
}
