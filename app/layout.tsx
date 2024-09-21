import '@/ui/global.css';
import { notosans, lato, inter, fredoka } from '@/ui/fonts';
import Header from '@/ui/components/header';
import Footer from '@/ui/components/footer';
import { Metadata } from 'next';
import Banner from '@/ui/components/banner';
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
    title: 'Runway'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${fredoka.className} bg-[#f6e6ff] text-[#41144e] antialiased`}
            >
                <Header />
                {children}
                <Footer />

                {/* <Banner /> */}
            </body>
            <GoogleAnalytics gaId="G-PXX3R01E9B" />
        </html>
    );
}
