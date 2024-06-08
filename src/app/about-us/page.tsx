import { PageProps } from '@/src/types';
import Callout from '../../components/Callout';
import { Metadata, ResolvingMetadata } from 'next';
import { cloudinary } from '@/src/lib/cdn';
import Image from '@/src/components/Image';
import Container from '@/src/components/Container';

export const generateMetadata = async (
    _: PageProps<{ slug: string }>,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const siteTitle = (await parent).title?.absolute;
    const description = (await parent).description;

    return {
        title: `About us - ${siteTitle}`,
        description
    };
};

export default function AboutUs({}: {}) {
    return (
        <>
            <Callout
                className='space-y-8 lg:space-y-10'
                image={{ filename: 'emily_vfqxuf', alt: 'bouquets', width: 1280, minHeight: 500 }}
            >
                <h3 className='text-center font-serif text-4xl font-light leading-none'>
                    Our Beginnings
                </h3>
                <article className='mx-auto space-y-10 text-center font-light leading-loose lg:w-2/3'>
                    <p>
                        Fleur&apos;s Floristry was founded after owner and designer Emily, found a
                        passion for faux floristry within her own wedding planning.
                    </p>
                    <p>
                        Taking her daughter&apos;s middle name as inspiration, Fleur&apos;s
                        Floristry was born.
                    </p>
                    <p>
                        Having previously worked with flowers as a hobby, creating gifts for loved
                        ones, Emily decided to turn her hobby into an independent business and now
                        strives to provide luxurious arrangements for all whatever the event.
                    </p>
                    <div>
                        <p className='font-semibold'>Award Nominated</p>
                        <ul className='italic'>
                            <li>Muddy Stiletto Awards 2023 - Finalist</li>
                            <li>I Do Wedding Magazine Awards 2023 - Finalist</li>
                            <li>Best of Melton Business Awards 2022 - Finalist</li>
                        </ul>
                    </div>
                </article>
            </Callout>
            <Container className='grid px-0 md:grid-cols-2'>
                <Image
                    filename='winner_image_nkzsu5'
                    path='fleursfloristry/about'
                    width={1200}
                    className='h-full w-full object-cover'
                    alt='about1'
                />
                <Image
                    filename='Photo_17-03-2024_13_06_02-min_jiuzba'
                    path='fleursfloristry/about'
                    width={1200}
                    className='h-full w-full object-cover'
                    alt='about2'
                />
            </Container>
        </>
    );
}

//
