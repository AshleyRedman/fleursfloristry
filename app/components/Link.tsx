import NextLink, { LinkProps } from 'next/link';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Link({ children, ...rest }: LinkProps & HTMLAttributes<HTMLAnchorElement>) {
    return (
        <NextLink
            {...rest}
            className={twMerge(
                'ring-peach-default outline-none focus-visible:ring focus-visible:rounded',
                rest.className
            )}
        >
            {children}
        </NextLink>
    );
}
