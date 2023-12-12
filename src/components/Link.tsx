import NextLink, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';
import { cn } from '../lib/helpers';

export default function Link({ children, ...rest }: LinkProps & HTMLAttributes<HTMLAnchorElement>) {
    return (
        <NextLink
            {...rest}
            className={cn(
                'outline-none ring-peach-default focus-visible:rounded focus-visible:ring',
                rest.className
            )}
        >
            {children}
        </NextLink>
    );
}
