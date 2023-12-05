import { twMerge } from 'tailwind-merge';
import Image from './Image';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';
import { HTMLAttributes } from 'react';
import Link from './Link';

export default function Testimonial({
    alignment,
    image,
    author,
    body,
    link
}: Testimonial & { alignment: 'left' | 'right' }) {
    return (
        <section
            className={twMerge(
                'grid gap-6 xl:gap-12',
                alignment && 'grid-cols-1 xl:grid-cols-2',
                alignment === 'left' ? '' : ''
            )}
        >
            {alignment === 'left' && image && (
                <>
                    <Entry author={author} body={body} link={link} />
                    <Image
                        filename={image.src}
                        alt={image.alt}
                        width={800}
                        className='h-full object-cover aspect-auto w-full'
                    />
                </>
            )}

            {alignment === 'right' && image && (
                <>
                    <Image
                        filename={image.src}
                        alt={image.alt}
                        width={800}
                        className='h-full object-cover aspect-auto w-full'
                    />
                    <Entry author={author} body={body} link={link} />
                </>
            )}

            {!image && <Entry author={author} body={body} link={link} className='col-span-2' />}
        </section>
    );
}

function Entry({
    author,
    body,
    link,
    ...rest
}: Pick<Testimonial, 'author' | 'body' | 'link'> & HTMLAttributes<HTMLDivElement>) {
    return (
        <article {...rest} className={twMerge('bg-gray p-8 space-y-6', rest.className)}>
            <Quote size={24} />
            <blockquote className='leading-loose italic'>
                <p className='px-4'>{body}</p>
            </blockquote>
            <span className='pl-4 block'>
                {!!link ? (
                    <Link href={link} className='underline decoration-peach-light decoration-2 underline-offset-2'>
                        {author}
                    </Link>
                ) : (
                    <small className='text-base'>{author}</small>
                )}
            </span>
        </article>
    );
}
