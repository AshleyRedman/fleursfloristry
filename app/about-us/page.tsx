import Callout from '../components/Callout';

export default function AboutUs({}: {}) {
    return (
        <>
            <Callout
                className='space-y-8 lg:space-y-10'
                image={{ filename: 'emily_vfqxuf', alt: 'bouquets', width: 1280, minHeight: 400 }}
            >
                <h3 className='text-center text-4xl font-light leading-none font-serif'>Our Beginnings</h3>
                <article className='leading-loose text-center lg:w-2/3 mx-auto font-light space-y-10'>
                    <p>
                        Fleur&apos;s Floristry was founded after owner and designer Emily, found a passion for faux
                        floristry within her own wedding planning.
                    </p>
                    <p>Taking her daughter&apos;s middle name as inspiration, Fleur&apos;s Floristry was born.</p>
                    <p>
                        Having previously worked with flowers as a hobby, creating gifts for loved ones, Emily decided
                        to turn her hobby into an independent business and now strives to provide luxurious arrangements
                        for all whatever the event.
                    </p>
                    <div>
                        <p className='font-semibold'>Award Nominated</p>
                        <ul className='italic'>
                            <li>Muddy Stiletto Awards 2023 - Finalist</li>
                            <li>I Do Wedding Magazine Awards 2023 - Finalist</li>
                            <li>Best of Melton Business Awards 2022 - Finalist</li>
                        </ul>
                    </div>
                </article>
            </Callout>
        </>
    );
}

//
