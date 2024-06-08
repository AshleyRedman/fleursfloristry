// Tony & Shari
import { GalleryEntry } from '@/src/types';

const src = [
    'mythe-barn-wedding-photographer-356-min_n4mx7s',
    'mythe-barn-wedding-photographer-327-min_qfctau',
    'mythe-barn-wedding-photographer-148-min_lwlubp',
    'mythe-barn-wedding-photographer-2-min_trofhr',
    'mythe-barn-wedding-photographer-265-min_q3oxzp',
    'mythe-barn-wedding-photographer-151-min_wttsww',
    'mythe-barn-wedding-photographer-14-min_t41utk',
    'mythe-barn-wedding-photographer-102-min_yrgmp5',
    'mythe-barn-wedding-photographer-3-min_pazff6',
    'mythe-barn-wedding-photographer-6-min_b1xa87'
];

const alt = 'Tony & Shari';
const path = 'fleursfloristry/gallery/Tony_Shari';
const venue = 'Mythe Barn';
const meta = 'Photographer - Stu Tucker Photography';

export const Tony_Shari: GalleryEntry = {
    heading: alt,
    subHeading: venue,
    meta,
    cover: { alt, path, filename: src[0] },
    items: src.map((s) => ({ alt, filename: s, path }))
};
