'use client';

import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import type { Image as I } from '../types';
import Button from './Button';
import Image from './Image';

export default function Lightbox({ image }: { image: I }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open]);

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                setOpen(false);
            }
        };

        document.addEventListener('keydown', keyDownHandler);

        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, []);

    return (
        <>
            <Button onPress={() => setOpen(true)} className='w-full'>
                <Image
                    filename={image.src}
                    alt={image.alt}
                    width={600}
                    className='aspect-video h-[400px] w-full object-cover'
                />
            </Button>

            {open && (
                <div className='fixed inset-0 z-40 flex items-center justify-center hover:cursor-pointer'>
                    <Button
                        onPress={() => setOpen(false)}
                        className='absolute right-4 top-4 z-50 !rounded-full bg-white p-2'
                    >
                        <X size={28} />
                    </Button>
                    <ClickAwayListener onClickAway={() => setOpen(false)}>
                        <Image
                            filename={image.src}
                            alt={image.alt}
                            width={1920}
                            className='mx-4 h-[calc(100vh-10px)] w-[calc(100%-32px)] rounded border-2 border-black'
                        />
                    </ClickAwayListener>
                    <div className='absolute inset-0 -z-10 bg-black/50' />
                </div>
            )}
        </>
    );
}
