import { Image } from '../types';
import Lightbox from './Lightbox';

export default function Masonry({ images }: { images: Image[] }) {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
            {images.map((img) => (
                <Lightbox key={img.src} image={img} />
            ))}
        </section>
    );
}
