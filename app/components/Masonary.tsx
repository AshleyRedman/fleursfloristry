import { Image } from '../types';
import Lightbox from './Lightbox';

export default function Masonry({ images }: { images: Image[] }) {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 bg-green gap-0.5 border-2 border-green'>
            {images.map((img) => (
                <Lightbox key={img.src} image={img} />
            ))}
        </section>
    );
}
