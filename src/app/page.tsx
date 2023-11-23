import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Yogga Aditya Candra',
  description: 'Home Page',
};

export default function Home() {
  return (
    <div className='mt-10'>
      <div className='m-auto w-full h-full flex flex-col gap-3 md:flex-row justify-evenly align-baseline items-center'>
        <div>
          <h5>Hai..... 👋 there, my name is </h5>
          <h1 className='font-bold text-blue-400'>Yogga Aditya Candra</h1>
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
            />
          </div>
        </div>
      </div>
      <div className='mt-16'>
        <div className='w-3/4 m-auto bg-blue-300 p-5 border-2 border-blue-600 text-white'>
          <p className='font-sans text-justify'>
            Saya memiliki pengalaman di bidang retail dengan keterampilan
            upselling, komunikasi, dan product knowledge yang cukup baik.
            Kemudian, saya beralih ke bidang pengembangan web sebagai Front End
            Developer dengan keterampilan JavaScript / TypeScript, React.js,
            NextJs, CSS Preprocessor, serta familiar dengan integrasi API untuk
            data yang dinamis pada aplikasi web front-end. Saya juga memiliki
            gelar akademisi dalam bidang ilmu komputer dengan GPA 3.56.
          </p>
        </div>
      </div>
    </div>
  );
}
