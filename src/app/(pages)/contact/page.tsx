import type { Metadata } from 'next';
import { ImLinkedin } from 'react-icons/im';
import { SiGithub } from 'react-icons/si';
import { BiLogoGmail } from 'react-icons/bi';
import { FaMedium, FaTelegram } from 'react-icons/fa';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'You can contact with me',
  description: 'Contact Page',
};

const Contact = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
      <div className='col-span-12 m-auto'>
        <div className='text-white font-mono bg-blue-300 border-2 border-blue-400 p-5 mx-5'>
          <h1 className='text-center'>You can connect with me...</h1>
        </div>
        <div className='flex flex-row mt-5 gap-3 md:gap-8 mx-1'>
          <Link
            href={'mailto:yogga910@gmail.com'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <BiLogoGmail size={50} color='#ea4335' />
          </Link>
          <Link
            href={'https://www.linkedin.com/in/yoggaac/'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImLinkedin size={50} color='#0a66c2' />
          </Link>
          <Link
            href={'https://github.com/yogga18'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiGithub size={50} />
          </Link>
          <Link
            href={'https://medium.com/@yoggacandra'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaMedium size={50} />
          </Link>
          <Link
            href={'https://t.me/yoggaacc'}
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTelegram size={50} color='#2399d5' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
