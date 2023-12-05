import { PageProps } from '@/src/types';
import ProductListing from '../../components/ProductListing';
import { cloudinary } from '@/src/lib/cdn';
import { Metadata, ResolvingMetadata } from 'next';

export const generateMetadata = async (
    _: PageProps<{ slug: string }>,
    parent: ResolvingMetadata
): Promise<Metadata> => {
    const siteTitle = (await parent).title?.absolute;
    const description = (await parent).description;

    return {
        title: `Prices - ${siteTitle}`,
        description
    };
};

export default function Prices({}: {}) {
    return (
        <>
            <ProductListing
                title='Wedding Florals'
                subheading='From Bridal Bouquets To Groomsman Buttonholes & All Things In Between.'
                image={cloudinary('WeddingFlorals_vgtbur', 'fleursfloristry', 'png', 1920)}
                entires={[
                    { label: 'Bridal Bouquet', price: 85 },
                    { label: 'Bridesmaid Bouquets', price: 35 },
                    { label: 'Flower Girl Wands, Hoops & Bouquets', price: 14 },
                    { label: 'Grooms Buttonhole', price: 9 },
                    { label: 'Groomsman Buttonholes', price: 9 },
                    { label: 'Page Boy Safety Pin Buttonhole', price: 6 },
                    { label: 'Corsages', price: 9 },
                    { label: 'Hair Combs', price: 16 }
                ]}
            />

            <ProductListing
                title='Venue decor'
                subheading='From Moon Gate Arches To Cake Poses And Every Room In Between'
                image={cloudinary('Venuedecor_e3ojxh', 'fleursfloristry', 'png', 1920)}
                entires={[
                    { label: 'Cake decor', price: 12 },
                    { label: 'Moon gate swag', price: 55 },
                    { label: 'Garlands', price: 45 },
                    { label: 'Isle decor', price: 14 },
                    { label: 'Centrepieces', price: 15 },
                    { label: 'Sign swags', price: 25 }
                ]}
            />
        </>
    );
}
