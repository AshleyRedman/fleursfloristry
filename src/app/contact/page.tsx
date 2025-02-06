import { PageProps } from '@/src/types';
import ContactForm from '../../components/ContactForm';
import Container from '../../components/Container';
import { Metadata, ResolvingMetadata } from 'next';

const gmap =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4828.574006518088!2d-0.9590257987993733!3d52.76309718066023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879d717fe4a9a97%3A0xbd1683a3ae65909c!2sAsfordby%2C%20Melton%20Mowbray!5e0!3m2!1sen!2suk!4v1688308215648!5m2!1sen!2suk';

export const generateMetadata = async (
    _: PageProps<{ slug: string }>,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const siteTitle = (await parent).title?.absolute;
    const description = (await parent).description;

    return {
        title: `Contact - ${siteTitle}`,
        description
    };
};

export default function Contact(_: PageProps<never>) {
    return (
        <>
            <section className='py-12'>
                <Container className='lg:px-48 2xl:px-96'>
                    <h3 className='text-peach-default text-center font-serif text-4xl font-medium'>
                        Contact us
                    </h3>
                    <article className='mt-8 mb-12 space-y-6 text-center'>
                        <p className='mx-auto w-4/5'>
                            As no event is the same, please don&apos;t hesitate to contact us with
                            any questions, comments or special requests that you may have. Please
                            also use this form in order to contact us regarding your bespoke wedding
                            package.
                        </p>
                        <p>Asfordby, Melton Mowbray</p>
                        <a href='mailto:enquiries@fleursfloristry.com' className='block underline'>
                            enquiries@fleursfloristry.com
                        </a>
                    </article>
                    <ContactForm />
                </Container>
            </section>
            <section>
                <iframe
                    title='Map'
                    src={gmap}
                    height='450'
                    style={{ border: 0 }}
                    allowFullScreen
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    className='w-full'
                ></iframe>
            </section>
        </>
    );
}
