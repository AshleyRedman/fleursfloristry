import Container from '../components/Container';
import Masonry from '../components/Masonary';
import { Image } from '../types';

const images: Image[] = [
    { src: 'gallery/1_yvruta', alt: '1' },
    { src: 'gallery/2_yl0fgx', alt: '2' },
    { src: 'gallery/3_nqawxv', alt: '3' },
    { src: 'gallery/4_wygrsa', alt: '4' },
    { src: 'gallery/5_wulo9g', alt: '5' },
];

export default function Gallery() {
    return (
        <>
            <section className='my-8 lg:my-16'>
                <Container>
                    <h3 className='text-center text-4xl font-serif text-peach-default font-medium'>Gallery</h3>
                </Container>
            </section>
            <Masonry images={images} />
        </>
    );
}
