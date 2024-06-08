import { PageProps } from '@/src/types';
import Container from '../../components/Container';
import { Metadata, ResolvingMetadata } from 'next';
import { cloudinary } from '@/src/lib/cdn';

type FAQ = { title: string; body: string };

const faqs: FAQ[] = [
    {
        title: 'Seasonal blooms all year round',
        body: 'No matter what time of the year you get married, you will have the full seasonal range of flowers to choose from. From Hydrangeas in winter to Snowdrops in summer, there are no limits like those that come with having fresh arrangements.'
    },
    {
        title: 'Hypoallergenic',
        body: "Whether you suffer from hay-fever yourself or have young members of your bridal party that are sensitive to pollen, with silk flowers, there is no reason to worry about sneezing down the aisle. Also, you don't have to worry about your guests becoming a little sore eyed."
    },
    {
        title: 'Less last minute stresses',
        body: "Planning a wedding can be stressful, and having to leave things until the last minute can really sit on your mind. By ordering in Silk, you can have your flowers delivered or finalised months in advance so that you can tick that part of your wedding off your 'list'."
    },
    {
        title: 'Pet and animal friendly',
        body: "If you are a pet lover, you may know that some types of fresh flowers are extremely toxic to some animals. So if you plan to have your dogs at your wedding or even Lamas, you can be rest assured that they aren't going to suffer!"
    },
    {
        title: 'Keepsakes for all',
        body: "There isn't much that you can physically bring away from your big day to keep and cherish for years to come. You have your photos and your ring, but with silk, you can now have your arrangements to admire too. Whether that's your stage decor, a single centrepiece, or a box framed bouquet, the possibilities in re-loved flowers are endless. They also make great gifts for after your wedding for your family or bridal party!"
    },
    {
        title: 'Whatever the weather',
        body: "In this ever changing climate with freezing temperatures to extreme heat waves, there isn't a worry of wilting or keeping your flowers cool the day and night before you get married. There's no need for risky water buckets to be sat around your dress and veil either!"
    }
];

export const generateMetadata = async (
    _: PageProps<{ slug: string }>,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const siteTitle = (await parent).title?.absolute;
    const description = (await parent).description;

    return {
        title: `FAQ - ${siteTitle}`,
        description
    };
};

export default function FAQ() {
    return (
        <>
            <section className='relative bg-white py-12'>
                <div
                    style={{
                        backgroundImage: `url(${cloudinary('IMG_7486_q2gafs', 'fleursfloristry/gallery/Ashleigh_Tom', 'jpg', 1920)})`
                    }}
                    className='absolute inset-0 bg-cover bg-bottom bg-no-repeat opacity-20'
                />
                <Container className=''>
                    <h3 className='text-center font-serif text-4xl font-medium text-peach-default'>
                        Why Artificial Flowers
                    </h3>
                    <h4 className='my-4 text-center text-xl font-light italic leading-relaxed text-green'>
                        A few little things that you may not have considered
                    </h4>
                    <div className='mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0'>
                        {faqs.map((f) => (
                            <article key={f.title} className='space-y-4 lg:p-8 2xl:p-16'>
                                <h5 className='font-serif text-2xl text-peach-default'>
                                    {f.title}
                                </h5>
                                <p className='leading-loose'>{f.body}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
