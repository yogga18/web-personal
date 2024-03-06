'use client';

import PrimaryCard from '@/app/Components/Card/PrimaryCard';
import React from 'react';
import { useGetProject } from '@/services/Project/queris';
import { projectType } from '@/types/Project/projectType';

const Project = () => {
  const projectQuery = useGetProject();

  const sortedData = projectQuery.data?.sort((a: any, b: any) => b.id - a.id);

  if (projectQuery.isLoading) {
    return (
      <div>
        <p className='text-center'>Loading...</p>
      </div>
    );
  }

  if (projectQuery.isError) {
    return (
      <div>
        <p className='text-center'>Error...</p>
      </div>
    );
  }

  return (
    <div className='grid grid-cols-12 w-full h-screen overflow-y-scroll'>
      <div className='col-span-12 mt-10'>
        {sortedData.map((data: projectType) => {
          return <PrimaryCard key={data.id} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Project;
