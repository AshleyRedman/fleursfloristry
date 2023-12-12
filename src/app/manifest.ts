import { MetadataRoute } from 'next';

const icon = 'android-chrome';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Fleur's Floristry",
        short_name: "Fleur's Floristry",
        description: 'Luxury Florals That Last A Lifetime',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        icons: [
            {
                src: `/${icon}-144x44.png`,
                sizes: '144x44',
                type: 'image/png'
            }
        ]
    };
}
