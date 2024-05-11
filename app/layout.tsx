import '@/ui/global.css';
import { notosans } from '@/ui/fonts';
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${notosans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}