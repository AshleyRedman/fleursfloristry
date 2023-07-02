'use client';

import Button from '@/app/components/Button';
import Link from '@/app/components/Link';
import { NavItem } from '@/app/types';
import { AnimatePresence, motion } from 'framer-motion';
import { AlignRight, Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClickAwayListner from 'react-click-away-listener';

export default function MobileMenu({ items }: { items: NavItem[] }) {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [open])

    useEffect(() => {
        if (pathname) {
            setOpen(false);
        }
    }, [pathname]);

    return (
        <>
            <Button onPress={() => setOpen(true)} className='block lg:hidden fixed top-4 right-6 z-30'>
                <Menu size={28} className='stroke-peach-default' />
            </Button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className='inset-0 fixed bg-black'
                        />
                        <ClickAwayListner onClickAway={() => setOpen(false)}>
                            <motion.aside
                                initial={{ x: '100%' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100%' }}
                                transition={{ duration: 0.25, bounce: 0 }}
                                className='fixed top-0 right-0 w-2/3 h-full bg-white shadow block lg:hidden z-40 pt-24 px-10'
                            >
                                <Button
                                    onPress={() => setOpen(false)}
                                    className='block lg:hidden fixed top-4 right-6 z-40'
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
