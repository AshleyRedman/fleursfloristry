import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import MobileMenu from '@/src/components/MobileMenu';
import { Analytics } from '@vercel/analytics/react';
import '../globals.css';
import { NavItem } from '../types';

export const metadata = {
    title: "Fleur's Floristry | Luxury Florals That Last A Lifetime",
    description: 'Luxury Florals That Last A Lifetime'
};

const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About us', href: '/about-us' },
    { label: 'Prices', href: '/prices' },
    { label: 'Reviews & Comments', href: '/testimonials' },
    { label: 'What We Use & Why', href: '/faq' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon.png' />
                <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
                <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
                <link rel='manifest' href='/site.webmanifest' />
                <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ffffff' />
                <meta name='msapplication-TileColor' content='#ffffff' />
                <meta name='theme-color' content='#ffffff' />
                <link href='https://fonts.cdnfonts.com/css/raleway-5' rel='stylesheet' />
            </head>
            <body className='antialiased bg-white text-black'>
                <Header items={navItems} />
                <main>{children}</main>
                <Footer />
                <MobileMenu items={navItems} />
            </body>

            <Analytics />
        </html>
    );
}
