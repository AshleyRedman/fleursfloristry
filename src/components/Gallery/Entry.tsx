'use client';

import type { GalleryEntry } from '@/src/types';
import Image from '@/src/components/Image';
import { LightBox } from '../Lightbox';
import { useState } from 'react';

export function Entry({ entry }: { entry: GalleryEntry }) {
    const [open, setOpen] = useState(false);

    return (
        <button type='button' onClick={() => setOpen(true)} className='bg-green pt-6'>
            <div className='mb-4 space-y-4'>
                <h3 className='text-center text-2xl'>{entry.heading}</h3>
                <h4 className='text-center text-lg'>{entry.subHeading}</h4>
            </div>
            <Image width={800} className='w-full' {...entry.cover} />
            <LightBox open={open} setOpen={setOpen} images={entry.items} />
        </button>
    );
}
