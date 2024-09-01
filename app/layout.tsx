import '@/ui/global.css';
import { notosans, lato, inter } from '@/ui/fonts';
import Header from '@/ui/components/header';
import Footer from '@/ui/components/footer';
import { Metadata } from 'next';
import Banner from '@/ui/components/banner';

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
                className={`${notosans.className} bg-[#f9f7fa] text-[#2e2e2e] antialiased`}
            >
                <Header />
                {children}
                <Footer />

                <Banner />
            </body>
        </html>
    );
}
