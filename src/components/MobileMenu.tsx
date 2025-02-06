'use client';

import Button from '@/src/components/Button';
import Link from '@/src/components/Link';
import { NavItem } from '@/src/types';
import { AnimatePresence, motion } from 'framer-motion';
import { AlignRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClickAwayListner from 'react-click-away-listener';

export default function MobileMenu({ items }: { items: NavItem[] }) {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (pathname) {
            setOpen(false);
        }
    }, [pathname]);

    return (
        <>
            <Button
                onPress={() => setOpen(true)}
                className='fixed top-2 right-4 z-30 block rounded-full bg-white p-2 lg:hidden'
            >
                <Menu size={28} className='stroke-peach-default' />
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className='fixed inset-0 bg-black'
                        />
                        <ClickAwayListner onClickAway={() => setOpen(false)}>
                            <motion.aside
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.25, bounce: 0 }}
                                className='fixed top-0 right-0 z-40 block h-full w-2/3 bg-white px-10 pt-24 shadow-sm lg:hidden'
                            >
                                <Button
                                    onPress={() => setOpen(false)}
                                    className='fixed top-4 right-10 z-40 block lg:hidden'
                                >
                                    <AlignRight size={28} className='stroke-peach-default' />
                                </Button>
                                <ul className='space-y-6'>
                                    {items.map((i) => (
                                        <li key={i.href}>
                                            <Link href={i.href}>{i.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.aside>
                        </ClickAwayListner>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
