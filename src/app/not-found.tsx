import { PageProps } from '@/src/types';
import { Metadata, ResolvingMetadata } from 'next';
import Container from '../components/Container';

export const generateMetadata = async (
    _: PageProps<{ slug: string }>,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const siteTitle = (await parent).title?.absolute;
    const description = (await parent).description;

    return {
        title: `Not found - ${siteTitle}`,
        description
    };
};

export default function NotFound({}: {}) {
    return (
        <section className='py-24'>
            <Container className='lg:px-48 2xl:px-96'>
                <h1 className='text-peach-default text-center font-serif text-4xl font-medium'>
                    Page not found
                </h1>
            </Container>
        </section>
    );
}
