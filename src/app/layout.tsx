import { Inter } from 'next/font/google';
import './globals.css';
import Provider from '@/utils/Provider';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yogga Aditya Candra',
  description: 'Home Page',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Provider>
          <div>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
