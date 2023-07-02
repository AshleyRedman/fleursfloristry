'use client';

import Container from '@/app/components/Container';
import Image from '@/app/components/Image';
import Link from '@/app/components/Link';
import { NavItem } from '@/app/types';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

export default function Header({ items }: { items: NavItem[] }) {
    return (
        <header className='mt-12 lg:mt-8 mb-8'>
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
            className={twMerge(
                'border-t-2 border-black/30 border-b-2 text-black/60 font-serif font-medium text-base 2xl:text-lg italic hover:border-black hover:text-black 2xl:min-w-[80px] text-center transition-all duration-300 ease-in-out',
                pathname === href && 'border-black text-black'
            )}
        >
            <Link href={href} className='py-3 block px-1 2xl:px-6'>
                {label}
            </Link>
        </li>
    );
}
