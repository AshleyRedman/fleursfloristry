'use client';

import { useState } from 'react';

import type { GalleryEntry } from '@/src/types';
import Button from '@/src/components/Button';
import Image from '@/src/components/Image';
import { LightBox } from '../Lightbox';

export function Entry({ entry }: { entry: GalleryEntry }) {
    const [open, setOpen] = useState(false);

    return (
        <Button
            type='button'
            onClick={() => setOpen(true)}
            className='group relative mb-3 w-full rounded bg-green'
        >
            <div className='absolute bottom-0 w-full space-y-4 bg-green/85 px-2 py-8 text-white 2xl:py-8'>
                <h3 className='text-center font-serif text-3xl font-bold text-gray'>
                    {entry.heading}
                </h3>
                <h4 className='text-center text-lg opacity-75'>{entry.subHeading}</h4>
                {!!entry.meta && (
                    <span className='mx-auto block min-h-[40px] w-4/5 text-center text-sm opacity-75'>
                        {entry.meta}
                    </span>
                )}
            </div>
            <Image
                width={800}
                className='w-full object-cover'
                {...entry.cover}
                alt={entry.cover.alt}
            />
            <LightBox open={open} setOpen={setOpen} images={entry.items} />
        </Button>
    );
}
