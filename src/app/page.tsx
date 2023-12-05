import Container from '@/src/components/Container';
import Image from '../components/Image';
import { StyledButton } from '../components/Button';
import Callout from '../components/Callout';

export default function Home() {
    return (
        <>
            <Image
                filename='banner_bnuaw0'
                width={1920}
                className='h-[200px] lg:h-[470px] object-cover w-full'
                alt='Banner'
            />

            <section className='mb-6 lg:mb-16'>
                <Container>
                    <div className='px-0 lg:px-48 py-8 text-center'>
                        <h3 className='text-4xl lg:text-7xl font-serif text-peach-light lg:leading-normal mb-4'>
                            Create your dream wedding today
                        </h3>
                        <h4 className='text-xl font-light my-8 leading-relaxed text-green italic'>
                            From bouquets to banquets, we can provide florals for all occasions no matter how big or
                            small.
                        </h4>
                        <article className='w-full lg:w-2/3 mb-12 mx-auto space-y-6 leading-loose text-black/80'>
                            <p>
                                Fleur&apos;s Floristry use only the highest quality dried, silk and faux flowers in
                                order to design and deliver realistic arrangements throughout all seasons. From
                                hydrangeas in winter to snowdrops in summer, faux flowers give you the ultimate choice
                                for any month of the year!
                            </p>
                            <p>
                                We provide a completely bespoke service with no packages to restrict you and no minimum
                                spends to reach.
                            </p>
                            <p>
                                Why not send us a message for a no obligation chat about your dream day and how we can
                                work together to achieve the floral arrangements that you always wanted.{' '}
                            </p>
                        </article>
                        <StyledButton link href='/contact'>
                            Enquire Now
                        </StyledButton>
                    </div>
                </Container>
            </section>

            <Callout
                className='space-y-8 lg:space-y-10'
                image={{ filename: 'bouquets_r6ogai', alt: 'bouquets', width: 1280, minHeight: 300 }}
            >
                <h3 className='uppercase text-4xl font-light leading-none font-serif'>About us</h3>
                <p className='lg:w-2/3 leading-loose'>
                    Fleur&apos;s Floristry is a luxury floral business based in the heart of rural Leicestershire. We
                    pride ourselves on creating beautifully bespoke arrangements and packages for any celebration,
                    specialising in bridal floristry & wedding decoration. Working with only the highest quality faux
                    and silk flowers, we create pieces that will last a lifetime and remain a stunning keepsake for
                    years to come. Why not take a look at the services we can offer you.
                </p>
                <div className='lg:space-x-3 space-y-4 lg:space-y-0'>
                    <StyledButton link href='/about-us' className=''>
                        Learn more
                    </StyledButton>
                    <StyledButton link href='/prices' className='bg-black text-white'>
                        Products & Prices
                    </StyledButton>
                </div>
            </Callout>
        </>
    );
}
