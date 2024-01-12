'use client';

import { Image } from '../types';
import RMasonry from 'react-masonry-css';

import Lightbox from './Lightbox';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
};

export default function Masonry({ images }: { images: Image[] }) {
    return (
        <RMasonry
            breakpointCols={breakpointColumnsObj}
            className='ml-[-12px] flex w-auto px-4 md:px-24'
            columnClassName='pl-[12px] bg-clip-border mb-4 md:mb-[12px]'
        >
            {images.map((img) => (
                <Lightbox key={img.src} image={img} className='mb-4 md:mb-[12px]' />
            ))}
        </RMasonry>
    );
}
