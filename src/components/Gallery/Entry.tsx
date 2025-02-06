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
            className='group bg-green relative mb-3 w-full rounded-sm'
        >
            <div className='bg-green/85 absolute bottom-0 w-full space-y-4 px-2 py-8 text-white 2xl:py-8'>
                <h3 className='text-gray text-center font-serif text-3xl font-bold'>
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
