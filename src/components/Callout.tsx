import { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/helpers';
import Image from './Image';

export default function Callout({
    image,
    children,
    ...rest
}: {
    image: { filename: string; alt: string; width: number; minHeight: number; path?: string };
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>) {
    return (
        <section className='bg-green/60 grid lg:grid-cols-2'>
            <article
                {...rest}
                className={cn(
                    'px-14 py-16 lg:ml-[100px] lg:px-0 lg:py-44 xl:ml-[150px] 2xl:ml-[400px]',
                    rest.className
                )}
            >
                {children}
            </article>

            <div className='!lg:min-h-0 relative' style={{ minHeight: image.minHeight }}>
                <Image
                    path={image.path}
                    filename={image.filename}
                    width={image.width}
                    alt={image.alt}
                    className='absolute inset-0 size-full object-cover'
                />
            </div>
        </section>
    );
}
