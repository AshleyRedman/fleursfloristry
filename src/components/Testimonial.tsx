import Image from './Image';
import { TestimonialType } from '../types';
import { Quote } from 'lucide-react';
import { HTMLAttributes } from 'react';
import Link from './Link';
import { cn } from '../lib/helpers';

export default function Testimonial({
    alignment,
    image,
    author,
    body,
    link
}: TestimonialType & { alignment: 'left' | 'right' }) {
    return (
        <section
            className={cn(
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
                        className='aspect-auto size-full object-cover'
                    />
                </>
            )}

            {alignment === 'right' && image && (
                <>
                    <Image
                        filename={image.src}
                        alt={image.alt}
                        width={800}
                        className='aspect-auto size-full object-cover'
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
}: Pick<TestimonialType, 'author' | 'body' | 'link'> & HTMLAttributes<HTMLDivElement>) {
    return (
        <article {...rest} className={cn('space-y-6 bg-green/60 p-8', rest.className)}>
            <Quote size={24} />
            <blockquote className='italic leading-loose'>
                <p className='px-4'>{body}</p>
            </blockquote>
            <span className='block pl-4'>
                {!!link ? (
                    <Link
                        href={link}
                        className='underline decoration-black decoration-2 underline-offset-2'
                    >
                        {author}
                    </Link>
                ) : (
                    <small className='text-base'>{author}</small>
                )}
            </span>
        </article>
    );
}
