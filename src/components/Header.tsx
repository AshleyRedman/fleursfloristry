'use client';

import Container from '@/src/components/Container';
import Image from '@/src/components/Image';
import Link from '@/src/components/Link';
import { NavItem } from '@/src/types';
import { usePathname } from 'next/navigation';
import { cn } from '../lib/helpers';

export default function Header({ items }: { items: NavItem[] }) {
    return (
        <header className='mt-12 pb-8 shadow lg:mt-8'>
            <Container className='space-y-4 lg:space-y-8'>
                <h1 className='mx-auto block w-fit text-center font-serif text-3xl font-bold text-peach-default lg:!-mb-6 lg:text-4xl lg:leading-loose'>
                    Fleur&apos;s Floristry
                </h1>
                <Link href='/' className='mx-auto flex w-fit'>
                    <Image
                        alt="Fleur's Floristry logo"
                        filename='logo_vsyxwk'
                        width={140}
                        loading='eager'
                        className='size-[70px] lg:h-[153px] lg:w-[140px]'
                    />
                </Link>
                <h3 className='mx-auto block w-fit text-center font-serif text-lg text-green lg:text-xl'>
                    Luxury Florals That Last A Lifetime
                </h3>
                <nav className='hidden lg:block'>
                    <ul className='mx-auto flex w-fit items-center space-x-4'>
                        {items.map((n) => (
                            <Item key={n.href} label={n.label} href={n.href} />
                        ))}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

function Item({ label, href }: NavItem) {
    const pathname = usePathname();
    return (
        <li
            className={cn(
                'border-y-2 border-black/30 text-center font-serif text-base font-medium italic text-black/60 transition-all duration-300 ease-in-out hover:border-black hover:text-black 2xl:min-w-[80px] 2xl:text-lg',
                pathname === href && 'border-black text-black'
            )}
        >
            <Link href={href} className='block px-1 py-3 2xl:px-6'>
                {label}
            </Link>
        </li>
    );
}
