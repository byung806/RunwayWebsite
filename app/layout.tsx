import '@/ui/global.css';
import { notosans, lato, inter } from '@/ui/fonts';
import Header from '@/ui/components/header';
import Footer from '@/ui/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Runway',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${notosans.className} antialiased bg-[#f9f7fa] text-[#2e2e2e]`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}