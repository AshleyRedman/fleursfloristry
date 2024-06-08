'use client';

import type { GalleryEntry } from '@/src/types';
import RMasonry from 'react-masonry-css';

import { Entry } from './Gallery/Entry';

const breakpointColumnsObj = {
    default: 3,
    1920: 2,
    1100: 1,
    700: 1,
    500: 1
};

export default function Masonry({ entries }: { entries: GalleryEntry[] }) {
    return (
        <RMasonry
            breakpointCols={breakpointColumnsObj}
            className='ml-[-12px] flex w-auto px-4 md:px-24'
            columnClassName='pl-[12px] bg-clip-border mb-4 md:mb-[12px]'
        >
            {entries.map((entry, i) => (
                <Entry key={i} entry={entry} />
            ))}
        </RMasonry>
    );
}
