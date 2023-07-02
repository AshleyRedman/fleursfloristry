import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import { Analytics } from '@vercel/analytics/react';
import { Raleway } from 'next/font/google';
import './globals.css';

const raleway = Raleway({ subsets: ['latin'], variable: '--raleway', display: 'swap' });

export const metadata = {
    title: "Fleur's Floristry | Luxury Florals That Last A Lifetime",
    description: 'Luxury Florals That Last A Lifetime'
};

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
            </head>
            <body className={`${raleway.variable} antialiased bg-white text-black space-y-8`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
            <Analytics />
        </html>
    );
}
