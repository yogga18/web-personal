'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaPhoneVolume } from 'react-icons/fa6';
import { FaHome, FaBookReader } from 'react-icons/fa';
import { GrProjects, GrDocumentPdf } from 'react-icons/gr';

const NavigationBar = () => {
  const dataPath = [
    {
      id: 1,
      name: 'About',
      path: '/',
      icon: <FaHome />,
    },
    {
      id: 2,
      name: 'Project',
      path: '/project',
      icon: <GrProjects />,
    },
    {
      id: 3,
      name: 'Blog',
      path: '/blog',
      icon: <FaBookReader />,
    },
    {
      id: 4,
      name: 'Contact',
      path: '/contact',
      icon: <FaPhoneVolume />,
    },
    {
      id: 5,
      name: 'CV',
      path: '/cv',
      icon: <GrDocumentPdf />,
    },
  ];

  const pathname = usePathname();

  return (
    <ul className='flex flex-row md:flex-col gap-6 bg-blue-300 h-full w-full align-baseline justify-center items-center border-white border-t-2 md:border-2'>
      {dataPath.map((item) => {
        return (
          <li
            key={item.id}
            className={`hidden md:block font-bold text-white font-sans ${
              pathname === item.path ? 'border border-white p-2 rounded-lg' : ''
            }`}
          >
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
      {dataPath.map((item) => {
        return (
          <li
            key={item.id}
            className={`block md:hidden text-white text-2xl font-sans ${
              pathname === item.path ? 'border border-white p-2 rounded-lg' : ''
            }`}
          >
            <Link href={item.path}>{item.icon}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationBar;
