'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { HTMLAttributes, useEffect, useState } from 'react';
import type { Image as I } from '../types';
import Button from './Button';
import Image from './Image';

export default function Lightbox({
    image,
    ...rest
}: { image: I } & HTMLAttributes<HTMLDivElement>) {
    const [open, setOpen] = useState(false);

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
        <div {...rest}>
            <Button onPress={() => setOpen(true)} className='mx-auto block w-full'>
                <Image filename={image.src} alt={image.alt} width={500} className='w-full' />
            </Button>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='fixed inset-0 z-40 flex items-center justify-center bg-black/60 hover:cursor-pointer'
                    >
                        <Button
                            onPress={() => setOpen(false)}
                            className='absolute top-4 right-4 z-50 rounded-full! bg-white p-2'
                        >
                            <X size={28} />
                        </Button>
                        <Image
                            filename={image.src}
                            alt={image.alt}
                            width={1920}
                            className='mx-4 h-auto w-[calc(100%-32px)] rounded-sm md:h-[calc(100vh-180px)]'
                        />
                        <div className='absolute inset-0 -z-10 bg-black/50' />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
