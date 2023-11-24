import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yogga Aditya Candra',
  description: 'Home Page',
};

export default function Home() {
  return (
    <div className='mt-10'>
      <div className='m-auto w-full h-full flex flex-col gap-3 md:flex-row justify-evenly align-baseline items-center'>
        <div>
          <h5 className='text-center'>Hai..... 👋 there, my name is </h5>
          <h1 className='font-bold text-blue-400 text-center'>
            Yogga Aditya Candra
          </h1>
        </div>
        <div>
          <div className='h-52 w-52 relative'>
            <Image
              style={{
                border: '1px solid #759dca',
                padding: '2px',
              }}
              src='/IMG_5434.jpg'
              alt='Picture of the author'
              layout='fill' // required
              objectFit='cover' // change to suit your needs
              className='rounded-full' // just an example
              priority
            />
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div className='w-4/5 md:w-5/6 m-auto bg-blue-300 p-4 border-2 border-blue-400 text-white'>
          <div>
            <p className='font-sans text-justify'>
              Saya memiliki soft skill yang cukup baik dalam hal upselling,
              komunikasi, dan product knowledge hal ini saya dapatkan dari
              pengalaman saya bekerja di bidang retail. Kemudian, saya melakukan{' '}
              <i>career switching</i> ke bidang pengembangan web sebagai Front
              End Developer dengan keterampilan :
            </p>
            <ol className='py-2'>
              <li className='flex gap-3'>
                👉 <p className='underline'>JavaScript atau TypeScript</p>
              </li>
              <li className='flex gap-3'>
                👉 <p className='underline'>React Frame Work NextJs</p>
              </li>
              <li className='flex gap-3'>
                👉 <p className='underline'>CSS Preprocessor seperti SASS</p>
              </li>
              <li className='flex gap-3'>
                👉{' '}
                <p className='underline'>CSS Utilitas seperti tailwind.css</p>
              </li>
              <li className='flex gap-3'>
                👉 <p className='underline'>Version Control (Git)</p>
              </li>
              <li className='flex gap-3'>
                👉 <p className='underline'>API Integration</p>
              </li>
            </ol>
            <p>
              Anda dapat melihat semua project yang telah saya kerjakan{' '}
              <Link href={'/project'} className='text-blue-500 font-semibold'>
                disini
              </Link>{' '}
              dan{' '}
              <Link href={'/blog'} className='text-blue-500 font-semibold'>
                disini
              </Link>
              . karena saya memiliki motivasi yang tinggi untuk belajar dan
              mengembangkan diri, saya juga memiliki gelar akademisi dalam
              bidang <i>Computer Science</i> dengan GPA 3.56,{' '}
              <i>and you can connect with me 🤙 </i> melalui{' '}
              <Link href={'/contact'} className='text-blue-500 font-semibold'>
                tautan ini.
              </Link>
            </p>
          </div>
          {/* <p className='font-sans text-justify'>
            Saya memiliki soft skill yang cukup baik dalam hal upselling,
            komunikasi, dan product knowledge hal ini saya dapatkan dari
            pengalaman saya bekerja di bidang retail. Kemudian, saya melakukan{' '}
            <i>career switching</i> ke bidang pengembangan web sebagai Front End
            Developer dengan keterampilan JavaScript / TypeScript, React.js,
            NextJs, CSS Preprocessor, Version Control (Git), serta familiar
            dengan integrasi API, anda dapat melihat semua project yang telah
            saya kerjakan{' '}
            <Link href={'/project'} className='text-blue-500 font-semibold'>
              disini
            </Link>{' '}
            dan{' '}
            <Link href={'/blog'} className='text-blue-500 font-semibold'>
              disini
            </Link>
            . karena saya memiliki motivasi yang tinggi untuk belajar dan
            mengembangkan diri, saya juga memiliki gelar akademisi dalam bidang{' '}
            <i>Computer Science</i> dengan GPA 3.56 .
          </p> */}
          <p className='text-end italic font-thin text-white pt-5'>
            #lifelonglearner
          </p>
        </div>
      </div>
    </div>
  );
}
