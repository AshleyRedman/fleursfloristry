'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import type { Image as I } from '../types';
import Button from './Button';
import Image from './Image';

export default function Lightbox({ image }: { image: I }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onPress={() => setOpen(true)} className='w-full'>
                <Image filename={image.src} alt={image.alt} width={600} className='aspect-video object-cover h-[400px] w-full' />
            </Button>

            {open && (
                <div className='fixed inset-0 flex justify-center items-center z-40 hover:cursor-pointer'>
                    <Button
                        onPress={() => setOpen(false)}
                        className='absolute top-4 right-4 z-50 bg-white p-2 !rounded-full'
                    >
                        <X size={28} />
                    </Button>
                    <ClickAwayListener onClickAway={() => setOpen(false)}>
                        <Image
                            filename={image.src}
                            alt={image.alt}
                            width={1280}
                            className='border-2 border-black rounded mx-4 w-[calc(100%-32px)]'
                        />
                    </ClickAwayListener>
                    <div className='absolute inset-0 bg-black/50 -z-10' />
                </div>
            )}
        </>
    );
}
