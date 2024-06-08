// October Wedding
import { GalleryEntry } from '@/src/types';

const src = [
    '445815845_485346114013860_1357965066852884230_n_gy1nuq',
    'IMG_7486_q2gafs',
    'IMG_8078_hjxkrw',
    'IMG_7710_nqqglw',
    'IMG_7732_fpnzdj',
    'IMG_7321_jwvcvt',
    '426354851_10233203484609639_8986467590446793139_n_nxpx0g'
];

const alt = 'Ashleigh & Tom';
const path = 'fleursfloristry/gallery/Ashleigh_Tom';
const venue = 'Santorini, Greece';
const meta = 'Photographer - Ben & Vesna Photography';

export const Ashleigh_Tom: GalleryEntry = {
    heading: alt,
    subHeading: venue,
    meta,
    cover: { alt, path, filename: src[0] },
    items: src.map((s) => ({ alt, filename: s, path }))
};
