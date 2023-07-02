import Image from '@/app/components/Image';
import Container from './Container';
import Link from './Link';

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about-us' },
    { label: 'Prices', href: '/prices' },
    { label: 'Reviews & Comments', href: '/testimonials' },
    { label: 'What We Use & Why', href: '/faq' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' }
];

export default function Header() {
    return (
        <header className='mt-8'>
            <Container className='space-y-4 lg:space-y-8'>
                <h1 className='mx-auto block text-center lg:!-mb-6 w-fit text-3xl lg:text-4xl lg:leading-loose text-peach-default font-serif font-bold'>
                    Fleur&apos;s Floristry
                </h1>
                <Link href='/' className='flex w-fit mx-auto'>
                    <Image
                        alt="Fleur's Floristry logo"
                        filename='logo_vsyxwk'
                        width={140}
                        loading='eager'
                        className='w-[70px] h-[70px] lg:w-[140px] lg:h-[153px]'
                    />
                </Link>
                <h3 className='font-serif text-center mx-auto w-fit block text-lg lg:text-xl text-green'>
                    Luxury Florals That Last A Lifetime
                </h3>
                <nav className='hidden lg:block'>
                    <ul className='mx-auto w-fit flex items-center space-x-4'>
                        {navItems.map((n) => (
                            <Item key={n.href} label={n.label} href={n.href} />
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

function Item({ label, href }: NavItem) {
    return (
        <li className='border-t-2 border-black/30 border-b-2 text-black/60 font-serif font-medium text-lg italic hover:border-black hover:text-black min-w-[80px] text-center transition-all duration-300 ease-in-out'>
            <Link href={href} className='py-3 block px-6'>
                {label}
            </Link>
        </li>
    );
}
