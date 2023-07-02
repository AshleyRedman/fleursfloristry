'use client';

import { ButtonHTMLAttributes, useRef } from 'react';
import { useButton, AriaButtonProps } from 'react-aria';
import { twMerge } from 'tailwind-merge';
import Link from './Link';

export default function Button({ ...rest }: AriaButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
    let ref = useRef<HTMLButtonElement>(null);
    let { buttonProps } = useButton(rest, ref);

    return (
        <button
            {...buttonProps}
            ref={ref}
            className={twMerge('ring-peach-default outline-none focus:ring focus:rounded', rest.className)}
        >
            {rest.children}
        </button>
    );
}

export function StyledButton({
    link,
    href,
    children,
    ...rest
}: AriaButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & { link?: boolean; href?: string }) {
    if (link && href) {
        return (
            <Link
                href={href}
                className={twMerge(
                    'inline-flex px-6 py-2 bg-peach-light text-center text-white rounded-none tracking-wide hover:bg-peach-default transition-colors duration-300 ease-in-out',
                    rest.className
                )}
            >
                {children}
            </Link>
        );
    }

    return (
        <Button
            {...rest}
            className={twMerge(
                'inline-flex px-6 py-2 bg-peach-light text-center text-white rounded-none tracking-wide hover:bg-peach-default transition-colors duration-300 ease-in-out',
                rest.className
            )}
        >
            {children}
        </Button>
    );
}
