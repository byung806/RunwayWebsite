import '@/ui/global.css';
import Header from '@/ui/components/header';
import Footer from '@/ui/components/footer';
import { notosans } from '@/ui/fonts';
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="pastel">
      <body className={`${notosans.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}