import type { GalleryEntry } from '@/src/types';
import { Entry } from './Entry';
import Masonry from '../Masonary';

export function Archive({ entries }: { entries: GalleryEntry[] }) {
    return (
        <section className='lg:px-24 2xl:px-44'>
            <Masonry entries={entries} />
        </section>
    );
}
