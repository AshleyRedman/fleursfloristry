import { Dispatch, SetStateAction, useMemo } from 'react';
import { SlideImage, Lightbox as YARLLightbox } from 'yet-another-react-lightbox';

import { cloudinary } from '../lib/cdn';
import { CDNImage } from '@/src/types';

export function LightBox({
    open,
    setOpen,
    images
}: {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    images: CDNImage[];
}) {
    const slides: SlideImage[] = useMemo(() => {
        return images.map((img) => ({ src: cloudinary(img.filename, img.path!, 'webp', 1440) }));
    }, [images]);

    return <YARLLightbox open={open} close={() => setOpen(false)} slides={slides} />;
}
