import Footer from '@/src/components/Footer';
import Header from '@/src/components/Header';
import MobileMenu from '@/src/components/MobileMenu';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Raleway } from 'next/font/google';
import '../globals.css';
import { canonical, cn } from '../lib/helpers';
import { NavItem, Stage } from '../types';

const raleway = Raleway({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    variable: '--font-family-raleway'
});

export const metadata = {
    title: "Fleur's Floristry | Luxury Florals That Last A Lifetime",
    description: 'Luxury Florals That Last A Lifetime',
    metadataBase: new URL('https://www.fleursfloristry.com'),
    alternates: {
        canonical: '/'
    },
    openGraph: {
        url: canonical(process.env.STAGE as Stage)
    }
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
        <html lang='en' className={cn('lg:scroll-smooth', raleway.variable)}>
            <body className='bg-white text-black antialiased'>
                <Header items={navItems} />
                <main>{children}</main>
                <Footer />
                <MobileMenu items={navItems} />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
