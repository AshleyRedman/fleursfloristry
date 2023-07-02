import { HTMLAttributes, ReactNode } from 'react';
import Container from './Container';
import Image from './Image';
import { twMerge } from 'tailwind-merge';

export default function Callout({
    image,
    children,
    ...rest
}: { image: { filename: string; alt: string; width: number }; children: ReactNode } & HTMLAttributes<HTMLDivElement>) {
    return (
        <section className='bg-gray grid lg:grid-cols-2'>
            <article
                {...rest}
                className={twMerge(
                    'py-16 lg:py-24 px-14 lg:px-0 lg:ml-[100px] xl:ml-[150px] 2xl:ml-[400px]',
                    rest.className
                )}
            >
                {children}
            </article>

            <div className='relative min-h-[300px] lg:min-h-0'>
                <Image
                    filename={image.filename}
                    width={image.width}
                    alt={image.alt}
                    className='absolute inset-0 object-cover h-full w-full'
                />
            </div>
        </section>
    );
}
