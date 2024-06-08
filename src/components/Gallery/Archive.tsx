import type { GalleryEntry } from '@/src/types';
import { Entry } from './Entry';

export function Archive({ entries }: { entries: GalleryEntry[] }) {
    return (
        <section className='grid grid-cols-1 gap-8 px-4 md:grid-cols-2 md:px-16 xl:px-44'>
            {entries.map((entry, i) => (
                <Entry key={i} entry={entry} />
            ))}
        </section>
    );
}
