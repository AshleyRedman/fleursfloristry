import { StyledButton } from './Button';
import Container from './Container';

type Entry = { label: string; price: number };

export default function ProductListing({
    title,
    subheading,
    entires,
    image,
    bgImage
}: {
    title: string;
    subheading: string;
    entires: Entry[];
    image?: string;
    bgImage?: string;
}) {
    return (
        <section className=''>
            <div className='relative pb-8'>
                <div
                    className='absolute inset-0 -z-10 bg-cover bg-no-repeat opacity-[8%]'
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <Container>
                    <div className='px-0 py-8 text-center lg:px-48'>
                        <h3 className='font-serif text-4xl text-peach-light lg:text-7xl lg:leading-normal'>
                            {title}
                        </h3>
                        <h4 className='my-4 text-xl font-light italic leading-relaxed text-green'>
                            {subheading}
                        </h4>
                        <div className='my-8 space-y-6'>
                            <span className='font-bold'>Providing But Not Limited To:</span>
                            <ul className='space-y-4'>
                                {entires.map((e) => (
                                    <li key={e.label}>
                                        {e.label} - from{' '}
                                        <span className='font-semibold text-peach-light'>
                                            £{e.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <StyledButton href='/contact' link>
                            Enquire now
                        </StyledButton>
                    </div>
                </Container>
            </div>
            {!!image && (
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='h-[250px] w-full bg-green bg-cover bg-center bg-no-repeat lg:h-[675px] lg:bg-fixed'
                />
            )}
        </section>
    );
}
