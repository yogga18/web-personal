import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PrimaryCard = ({ id, data, isMetaData }: any) => {
  return (
    <div
      key={id}
      className='w-5/6 md:w-3/5 m-auto rounded overflow-hidden shadow-lg mb-10'
    >
      <Image
        src={data.thumbnail}
        alt='Picture of the author'
        width={800}
        height={900}
      />
      <div className='px-6 py-5'>
        <Link href={data.url} target='_blank' rel='noopener noreferrer'>
          <div className='font-bold text-sm md:text-xl mb-2 hover:text-blue-500 cursor-pointer'>
            {data.title}
          </div>
        </Link>
        {isMetaData ? (
          <div className='flex justify-between my-5'>
            <p>Oleh {data.author}</p>
            <p>{data.createdAt}</p>
          </div>
        ) : null}

        <p className='text-gray-700 text-base hidden md:block text-justify'>
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default PrimaryCard;
