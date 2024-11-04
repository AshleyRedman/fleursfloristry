import Container from '@/src/components/Container';
import { Archive } from '@/src/components/Gallery/Archive';
import {
    Ashleigh_Tom,
    Fran_Adam,
    Leah_Bill,
    October_Wedding,
    Polly_Thomas,
    Tony_Shari,
    Rae_Matt,
    Jessica_Jack,
    Deborah_Sam,
    Zoe_Kevin
} from '@/src/content/gallery';
import { GalleryEntry, PageProps } from '@/src/types';
import { Metadata, ResolvingMetadata } from 'next';

const GalleryEntries: GalleryEntry[] = [
    Jessica_Jack,
    Ashleigh_Tom,
    Rae_Matt,
    Deborah_Sam,
    Leah_Bill,
    Fran_Adam,
    Polly_Thomas,
    Tony_Shari,
    October_Wedding,
    Zoe_Kevin
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

export default function Gallery(_: PageProps<never>) {
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
