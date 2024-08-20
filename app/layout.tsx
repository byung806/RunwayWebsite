import '@/ui/global.css';
import { notosans } from '@/ui/fonts';
import Header from '@/ui/components/header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={`${notosans.className} antialiased bg-black`}>
                <Header />
                {children}
            </body>
        </html>
    );
}