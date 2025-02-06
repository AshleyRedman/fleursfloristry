import NextLink, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';
import { cn } from '../lib/helpers';

export default function Link({
    children,
    external,
    ...rest
}: LinkProps & HTMLAttributes<HTMLAnchorElement> & { external?: boolean }) {
    return (
        <NextLink
            {...rest}
            target={external ? '_blank' : '_self'}
            rel={external ? 'noopener noreferrer' : undefined}
            className={cn(
                'ring-peach-default outline-hidden focus-visible:rounded-sm focus-visible:ring-3',
                rest.className
            )}
        >
            {children}
        </NextLink>
    );
}
