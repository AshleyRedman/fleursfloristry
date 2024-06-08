// Polly & Thomas
import { GalleryEntry } from '@/src/types';

const src = [
    '003_2_j1rt5m',
    'Screenshot_20230917_202842_Dropbox_fcs2lh',
    '002_sxwd3y',
    '007_zdeid1',
    '006_s8hn7l',
    'Screenshot_20230917_202818_Dropbox_yaxtbw',
    '382712772_337067878841685_1134894934565529057_n_hk9uwi',
    '009_qxhhyp',
    '005_l0vh3e',
    '004_yui8ks',
    '001_hmymuc'
];

const alt = 'Polly & Thomas';
const path = 'fleursfloristry/gallery/Polly_Thomas';
const venue = 'Whittington Castle';
const meta =
    'Photographers - Holly Mason Photography (Bride & Groom) Josh Fletcher Photography (Florals)';

export const Polly_Thomas: GalleryEntry = {
    heading: alt,
    subHeading: venue,
    meta,
    cover: { alt, path, filename: src[0] },
    items: src.map((s) => ({ alt, filename: s, path }))
};
