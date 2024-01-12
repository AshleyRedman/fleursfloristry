import Container from './Container';

import { Facebook, Instagram, Mail } from 'lucide-react';
import Link from './Link';

export default function Footer({}: {}) {
    return (
        <footer className='mt-8'>
            <Container className='flex items-center justify-between pb-6'>
                <span className='font-serif text-2xl text-peach-default'>
                    Fleur&apos;s Floristry
                </span>
                <ul className='flex items-center space-x-4'>
                    <li>
                        <Link href='mailto:enquiries@fleursfloristry.com' className='block'>
                            <Mail size={24} className='stroke-peach-default' />
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.facebook.com/FleursFloristry' className='block'>
                            <Facebook size={24} className='stroke-peach-default' />
                        </Link>
                    </li>
                    <li>
                        <Link href='https://www.instagram.com/fleursfloristry/' className='block'>
                            <Instagram size={24} className='stroke-peach-default' />
                        </Link>
                    </li>
                </ul>
            </Container>
            <div className='bg-gray py-6'>
                <Container>
                    <small className='font-medium text-peach-dark'>
                        &copy; <span>Fleur&apos;s Floristry </span>
                        {new Date().getFullYear()}
                    </small>
                </Container>
            </div>
        </footer>
    );
}
