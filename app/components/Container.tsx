import { HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Container({ children, ...rest }: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest} className={twMerge('container mx-auto px-8 lg:px-12', rest.className)}>
            {children}
        </div>
    );
}
