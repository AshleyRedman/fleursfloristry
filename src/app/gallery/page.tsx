import Container from '@/src/components/Container';
import { Archive } from '@/src/components/Gallery/Archive';
import { GalleryEntry, Image, PageProps } from '@/src/types';
import { Metadata, ResolvingMetadata } from 'next';

const images: Image[] = [
    { src: 'gallery/1_yvruta', alt: '1' },
    { src: 'gallery/2_yl0fgx', alt: '2' },
    { src: 'gallery/3_nqawxv', alt: '3' },
    { src: 'gallery/4_wygrsa', alt: '4' },
    { src: 'gallery/5_wulo9g', alt: '5' },
    { src: 'gallery/6_qzsg0m', alt: '6' },
    { src: 'gallery/7_ftik5b', alt: '7' },
    { src: 'gallery/8_chatch', alt: '8' },
    { src: 'gallery/9_zutw3p', alt: '9' },
    { src: 'gallery/10_ycrrri', alt: '10' },
    { src: 'gallery/11_uiiphb', alt: '11' },
    { src: 'gallery/12_mkevjn', alt: '12' },
    { src: 'gallery/13_g8i6cq', alt: '13' },
    { src: 'gallery/14_dyqjmk', alt: '14' },
    { src: 'gallery/15_emvrxn', alt: '15' },
    { src: 'gallery/16_l7hvnz', alt: '16' },
    { src: 'gallery/17_tmrhrl', alt: '17' },
    { src: 'gallery/18_l9uath', alt: '18' },
    { src: 'gallery/19_il2kdy', alt: '19' },
    { src: 'gallery/20_zaso1t', alt: '20' },
    { src: 'gallery/21_yvsgit', alt: '21' },
    { src: 'gallery/22_lptn5w', alt: '22' },
    { src: 'gallery/23_qdinzw', alt: '23' },
    { src: 'gallery/24_wojedk', alt: '24' },
    { src: 'gallery/25_xaptjp', alt: '25' },
    { src: 'gallery/26_mse30c', alt: '26' },
    { src: 'gallery/27_aoa3bz', alt: '27' },
    { src: 'gallery/28_o2p3gh', alt: '28' },
    { src: 'gallery/29_sregop', alt: '29' },
    { src: 'gallery/30_tvvyax', alt: '30' },
    { src: 'gallery/31_yepk01', alt: '31' },
    { src: 'gallery/32_evbw3s', alt: '32' },
    { src: 'gallery/33_e6whjr', alt: '33' },
    { src: 'gallery/34_vgvshj', alt: '34' },
    { src: 'gallery/35_wphike', alt: '35' },
    { src: 'gallery/36_f13bnv', alt: '36' },
    { src: 'gallery/37_vtc6fz', alt: '37' },
    // { src: 'gallery/38_x2jklx', alt: '38' },
    { src: 'gallery/39_dfzjrj', alt: '39' },
    { src: 'gallery/40_xnxrpe', alt: '40' },
    { src: 'gallery/41_eom9x0', alt: '41' },
    { src: 'gallery/42_yovkgt', alt: '42' },
    { src: 'gallery/43_kp4hk8', alt: '43' },
    // { src: 'gallery/44_yxgyo1', alt: '44' },
    { src: 'gallery/45_sishk1', alt: '45' },
    { src: 'gallery/46_x5o6dp', alt: '46' },
    { src: 'gallery/47_jhqyuu', alt: '47' },
    { src: 'gallery/48_jzfklo', alt: '48' },
    { src: 'gallery/49_twlt0o', alt: '49' },
    { src: 'gallery/50_o49wqg', alt: '50' },
    { src: 'gallery/51_rmk6ra', alt: '51' },
    { src: 'gallery/52_khgktq', alt: '52' },
    { src: 'gallery/53_wsfpww', alt: '53' },
    { src: 'gallery/54_cehewc', alt: '54' },
    { src: 'gallery/55_iz2yxr', alt: '55' },
    { src: 'gallery/56_s2levg', alt: '56' },
    { src: 'gallery/57_sdrcmn', alt: '57' },
    { src: 'gallery/58_uuwywb', alt: '58' },
    { src: 'gallery/59_fyhwb7', alt: '59' },
    { src: 'gallery/60_gvw8rw', alt: '60' },
    { src: 'gallery/61_chcmfp', alt: '61' },
    { src: 'gallery/62_rpgsw3', alt: '62' },
    { src: 'gallery/63_grzhtk', alt: '63' }
];

const GalleryEntries: GalleryEntry[] = [
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: [
            { alt: 'lol', filename: '1_yvruta', path: 'fleursfloristry/gallery', width: 1920 },
            { alt: 'lol', filename: '1_yvruta', path: 'fleursfloristry/gallery' },
            { alt: 'lol', filename: '1_yvruta', path: 'fleursfloristry/gallery' }
        ]
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: []
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: []
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: [{ alt: 'lol', filename: '1_yvruta', path: 'fleursfloristry/gallery' }]
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: []
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: []
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: []
    },
    {
        heading: 'lol',
        subHeading: 'lol2',
        cover: {
            alt: 'lol',
            filename: '1_yvruta',
            path: 'fleursfloristry/gallery'
        },
        items: []
    }
];

export const generateMetadata = async (
    _: PageProps<{ slug: string }>,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const siteTitle = (await parent).title?.absolute;
    const description = (await parent).description;

    return {
        title: `Gallery - ${siteTitle}`,
        description
    };
};

export default function Gallery() {
    return (
        <>
            <section className='my-8 lg:my-16'>
                <Container>
                    <h3 className='text-center font-serif text-4xl font-medium text-peach-default'>
                        Gallery
                    </h3>
                </Container>
            </section>
            <Archive entries={GalleryEntries} />
            {/* <Masonry images={images} /> */}
        </>
    );
}
