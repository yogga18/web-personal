'use client';

import { useGetBlog } from '@/services/Blog/queris';
import PrimaryCard from '@/app/Components/Card/PrimaryCard';
import { blogType } from '@/types/Blog/blogTypes';

const Blog = () => {
  const blogQuery = useGetBlog();

  const sortedData = blogQuery.data?.sort((a: any, b: any) => b.id - a.id);

  if (blogQuery.isLoading) {
    return (
      <div>
        <p className='text-center'>Loading...</p>
      </div>
    );
  }

  if (blogQuery.isError) {
    return (
      <div>
        <p className='text-center'>Error...</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-12 w-full h-screen overflow-y-scroll'>
      <div className='col-span-12 mt-10'>
        {sortedData.map((data: blogType) => {
          return <PrimaryCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Blog;
