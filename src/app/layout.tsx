import { Inter } from 'next/font/google';
import NavigationBar from './Components/Navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='grid grid-cols-12 h-screen'>
          <div className='md:col-span-10 col-span-12'>{children}</div>
          <div className='md:col-span-2 col-span-12 fixed md:static bottom-0 left-0 w-full md:h-full h-16'>
            <NavigationBar />
          </div>
        </div>
      </body>
    </html>
  );
}
