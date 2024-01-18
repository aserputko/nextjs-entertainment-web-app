import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], weight: ['100', '200', '300', '400', '700'] });

export const metadata: Metadata = {
  title: '...Create Next App',
  description: 'Generated by create next app',

  icons: {
    icon: [{ url: 'assets/favicon.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={`${outfit.className} bg-dark-blue p-8 text-white`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
