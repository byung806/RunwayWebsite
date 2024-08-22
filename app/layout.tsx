import '@/ui/global.css';
import { notosans } from '@/ui/fonts';
import Header from '@/ui/components/header';
import Footer from '@/ui/components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${notosans.className} antialiased bg-[#fbf7ff] text-[#2e2e2e] font-bold`}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}