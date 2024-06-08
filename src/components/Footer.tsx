import { Mail } from 'lucide-react';

import Container from './Container';
import Link from './Link';
import Image from './Image';
import { Facebook, Instagram } from './BrandIcons';

export default function Footer({}: {}) {
    return (
        <footer className='mt-8'>
            <Container className='flex items-center justify-between pb-16 pt-10'>
                <div className='flex items-baseline space-x-8'>
                    <span className='font-serif text-3xl text-peach-default'>
                        Fleur&apos;s Floristry
                    </span>

                    <span className='font-sans text-sm font-medium text-green'>
                        I Do Wedding Magazine Awards Winner{' '}
                        <span className='font-light'>(2024)</span>
                    </span>
                </div>

                <ul className='flex items-center space-x-3'>
                    <li>
                        <Link
                            href='mailto:enquiries@fleursfloristry.com'
                            external
                            className='block'
                        >
                            <Mail size={24} className='stroke-peach-default' />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://www.facebook.com/FleursFloristry'
                            external
                            className='block'
                        >
                            <Facebook className='size-[24px] fill-peach-default' />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href='https://www.instagram.com/fleursfloristry/'
                            external
                            className='block'
                        >
                            <Instagram className='size-[24px] fill-peach-default' />
                        </Link>
                    </li>
                </ul>
            </Container>
            <div className='bg-green/60 py-6'>
                <Container className='items-center justify-between space-y-8 md:flex md:space-x-10 md:space-y-0'>
                    <div className='flex items-center space-x-5'>
                        <Image
                            filename='winners_vs2bhc'
                            alt='winners'
                            path='fleursfloristry/logos'
                            width={80}
                            className='rounded'
                        />
                        <Image
                            filename='finalist_fkmsfa'
                            alt='finalisr'
                            path='fleursfloristry/logos'
                            width={80}
                            className='rounded'
                        />
                    </div>
                    <div>
                        <small className='block font-medium text-black'>
                            &copy; <span>Fleur&apos;s Floristry </span>
                            {new Date().getFullYear()}
                        </small>
                        <small className='block font-light text-black'>
                            Website by{' '}
                            <Link href='https://www.ajrsoftware.com' external className='underline'>
                                AJR Software
                            </Link>
                        </small>
                    </div>
                </Container>
            </div>
        </footer>
    );
}
