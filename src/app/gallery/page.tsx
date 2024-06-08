import Container from '@/src/components/Container';
import { Archive } from '@/src/components/Gallery/Archive';
import { GalleryEntry, Image, PageProps } from '@/src/types';
import { Metadata, ResolvingMetadata } from 'next';

const GalleryEntries: GalleryEntry[] = [
    {
        heading: 'Leah & Bill',
        subHeading: 'The Old Cow Shed',
        meta: 'Photographer - Blonde Shot Photography',
        cover: {
            alt: 'Leah & Bill',
            filename: 'L_B102-min_ghbm7i',
            path: 'fleursfloristry/gallery/Leah_Bill'
        },
        items: [
            {
                alt: 'Leah & Bill',
                filename: 'L_B102-min_ghbm7i',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B75-min_cmkmmw',
                path: 'fleursfloristry/gallery/Leah_Bill',
                width: 1920
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B97-min_eskfga',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B121-min_hx3egj',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B60-min_cskouv',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B91-min_xjxkge',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B131-min_k0fegh',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B49-min_dcxo3h',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B107-min_dz120q',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B101-min_rz3pof',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B99-min_n2dnpk',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B16-min_gibdi7',
                path: 'fleursfloristry/gallery/Leah_Bill'
            },
            {
                alt: 'Leah & Bill',
                filename: 'L_B47-min_yor7rr',
                path: 'fleursfloristry/gallery/Leah_Bill'
            }
        ]
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
