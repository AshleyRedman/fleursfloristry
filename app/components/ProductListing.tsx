import { StyledButton } from './Button';
import Container from './Container';

type Entry = { label: string; price: number };

export default function ProductListing({
    title,
    subheading,
    entires,
    image
}: {
    title: string;
    subheading: string;
    entires: Entry[];
    image?: string;
}) {
    return (
        <section>
            <Container>
                <div className='px-0 lg:px-48 py-8 text-center'>
                    <h3 className='text-4xl lg:text-7xl font-serif text-peach-light lg:leading-normal'>{title}</h3>
                    <h4 className='text-xl font-light my-4 leading-relaxed text-green italic'>{subheading}</h4>
                    <div className='my-8 space-y-6'>
                        <span className='font-bold'>Providing But Not Limited To:</span>
                        <ul className='space-y-4'>
                            {entires.map((e) => (
                                <li key={e.label}>
                                    {e.label} - from <span className='font-semibold text-peach-light'>£{e.price}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <StyledButton href='/contact' link>
                        Enquire now
                    </StyledButton>
                </div>
            </Container>
            {!!image && (
                <div
                    style={{ backgroundImage: `url(${image})` }}
                    className='mt-8 lg:bg-fixed bg-no-repeat bg-cover bg-center w-full h-[250px] lg:h-[675px] bg-green'
                />
            )}
        </section>
    );
}
