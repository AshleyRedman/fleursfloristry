// October Wedding
import { GalleryEntry } from '@/src/types';

const src = [
    'GARRETT-336-min_pt7a3k',
    'GARRETT-6-min_hp4xne',
    'GARRETT-369-min_p7fcsc',
    'GARRETT-402-min_uhnc4s',
    'GARRETT-344-min_eob30g',
    'GARRETT-195-min_datrdr',
    'GARRETT-15-min_nj3zbk',
    'GARRETT-min_fdfswr',
    'GARRETT-386-min_bscbjz',
    'GARRETT-5-min_masgng',
    'GARRETT-460-min_pz7noh'
];

const alt = 'October Wedding';
const path = 'fleursfloristry/gallery/October_Wedding';
const venue = 'Donnington Park Farmhouse Hotel';
const meta = 'Photographer - Stu Tucker Photography';

export const October_Wedding: GalleryEntry = {
    heading: alt,
    subHeading: venue,
    meta,
    cover: { alt, path, filename: src[0] },
    items: src.map((s) => ({ alt, filename: s, path }))
};
