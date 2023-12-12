import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/helpers';

export default function Container({
    children,
    ...rest
}: { children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <div {...rest} className={cn('container mx-auto px-8 lg:px-12', rest.className)}>
            {children}
        </div>
    );
}
