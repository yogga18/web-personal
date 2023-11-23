'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavigationBar = () => {
  const pathname = usePathname();
  return (
    <ul className='flex flex-row md:flex-col gap-3 bg-blue-300 h-full w-full align-baseline justify-center items-center'>
      <li
        className={`font-thin md:font-bold text-white font-sans ${
          pathname === '/' ? 'border border-white p-2 rounded-lg' : ''
        }`}
      >
        <Link href='/'>About</Link>
      </li>
      <li
        className={`font-thin md:font-bold text-white font-sans ${
          pathname === '/project' ? 'border border-white p-2 rounded-lg' : ''
        }`}
      >
        <Link href='/project'>Project</Link>
      </li>
      <li
        className={`font-thin md:font-bold text-white font-sans ${
          pathname === '/blog' ? 'border border-white p-2 rounded-lg' : ''
        }`}
      >
        <Link href='/blog'>Blog</Link>
      </li>
      <li
        className={`font-thin md:font-bold text-white font-sans ${
          pathname === '/contact' ? 'border border-white p-2 rounded-lg' : ''
        }`}
      >
        <Link href='/contact'>Contact</Link>
      </li>
      <li
        className={`font-thin md:font-bold text-white font-sans ${
          pathname === '/cv' ? 'border border-white p-2 rounded-lg' : ''
        }`}
      >
        <Link href='/cv'>CV</Link>
      </li>
    </ul>
  );
};

export default NavigationBar;
