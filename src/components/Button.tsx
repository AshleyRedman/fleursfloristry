'use client';

import { ButtonHTMLAttributes, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';
import { cn } from '../lib/helpers';
import Link from './Link';

export default function Button({
    ...rest
}: AriaButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
    let ref = useRef<HTMLButtonElement>(null);
    let { buttonProps } = useButton(rest, ref);

    return (
        <button {...buttonProps} ref={ref} className={cn('outline-hidden', rest.className)}>
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
                className={cn(
                    'bg-peach-light hover:bg-peach-default inline-flex rounded-none px-6 py-2 text-center tracking-wide text-white transition-colors duration-300 ease-in-out',
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
            className={cn(
                'bg-peach-light hover:bg-peach-default inline-flex rounded-none px-6 py-2 text-center tracking-wide text-white transition-colors duration-300 ease-in-out',
                rest.className
            )}
        >
            {children}
        </Button>
    );
}
